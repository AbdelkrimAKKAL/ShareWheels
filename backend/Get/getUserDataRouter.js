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
    const userId = userData[0].id_uti;

    // Get user's cars
    const carsConnection = await pool.getConnection();
    const [userCars] = await carsConnection.query(
      "SELECT * FROM voitures WHERE id_prop = ?",
      [userId]
    );
    carsConnection.release();


    // Get user's participated journeys
    const participatedConnection = await pool.getConnection();
    const [userParticipated] = await participatedConnection.query(
      "SELECT * FROM reservations WHERE id_reserveur = ?",
      [userId]
    );
    participatedConnection.release(); // Release the correct connection here

    // Assemble the user information along with their carsjourneys
    const userWithDetails = {
      user: userData[0],
      cars: userCars,
      participated: userParticipated,
    };

    res.status(200).json(userWithDetails);
  } catch (error) {
    console.error("Error retrieving user information:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
