import express from "express";
import { pool } from "../createPool.js"; // Import the pool from createPool.js
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";


const router = express.Router();
router.post("/:email", async (req, res) => {
  try {
    const { email } = req.params
    const { password, oldPassword } = req.body;
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM Utilisateurs WHERE email = ?",
      [email]
    );
    connection.release();

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = rows[0];

    // verify if the Password entred by the user is correct and exists
    const isMatch = await bcrypt.compare(oldPassword, user.mdp)
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Hash the new password before updating it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password in the database
    const updateResult = await pool.query(
      'UPDATE Utilisateurs SET mdp = ? WHERE email = ?',
      [hashedPassword, email]
    );

      res.status(201).json({ message: "done Verified" });
    } catch (error) {
      console.error(":", error);
      res.status(500).json({ error: "not done" });
    }
  });

export default router;
