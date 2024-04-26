import express from "express";
import { pool } from "../createPool.js"; // Import the pool from createPool.js

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

    // If email and phone number are unique, proceed with insertion
    const insertConnection = await pool.getConnection();
    const [result] = await insertConnection.query(
      "INSERT INTO Utilisateurs (nom, prenom, mdp, num_tel, photo, email, est_certifie, certificat, genre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nom, prenom, mdp, num_tel, photo, email, est_certifie, certificat, genre]
    );
    insertConnection.release();

    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
