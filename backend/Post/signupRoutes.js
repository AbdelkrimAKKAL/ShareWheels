import express from "express";
import { pool } from "../createPool.js"; // Import the pool from createPool.js
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import env from '../../env.js';
const {JWT_LIFETIME, JWT_SECRET} = env
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      nom,
      prenom,
      mdp,
      num_tel,
      photo,
      email,
      est_certifie,
      certificat,
      genre,
    } = req.body;

    // Check if required fields are provided
    if (!nom || !prenom || !mdp || !email || !num_tel) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if email or phone number already exists
    const connection = await pool.getConnection();
    const [existingUsers] = await connection.query(
      "SELECT * FROM Utilisateurs WHERE email = ? OR num_tel = ?",
      [email, num_tel]
    );
    connection.release();

    if (existingUsers.length > 0) {
      return res
        .status(400)
        .json({ error: "Email or phone number already in use" });
    }

    // hash password 

    const hashedPassword = await bcrypt.hash(mdp, 10)

    // If email and phone number are unique, proceed with insertion
    const insertConnection = await pool.getConnection();
    const [result] = await insertConnection.query(
      "INSERT INTO Utilisateurs (nom, prenom, mdp, num_tel, photo, email, est_certifie, certificat, genre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nom, prenom, hashedPassword, num_tel, photo, email, est_certifie, certificat, genre]
    );
    insertConnection.release();

    // create a token
    const token = jwt.sign({ userTel: num_tel, name: nom }, JWT_SECRET, {
      expiresIn: JWT_LIFETIME,
    })

    res.status(200).json({
      message: "Login successful",
      user: {email: email},
      token,
    });

  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
