import express from "express";
import { pool } from "../createPool.js"; // Import the pool from createPool.js

const router = express.Router();

router.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    // Get user information
    const userConnection = await pool.getConnection();
    const [userData] = await userConnection.query(
      "SELECT * FROM Utilisateurs WHERE email = ?",
      [email]
    );
    userConnection.release();

    if (userData.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
  
    // Assemble the user information along with their carsjourneys
    const userWithDetails = {
      user: userData[0],
    };

    res.status(200).json(userWithDetails);
  } catch (error) {
    console.error("Error retrieving user information:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
