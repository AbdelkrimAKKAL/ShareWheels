import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { email } = req.query;
    const currentTime = new Date().toISOString();

    let query = `
    SELECT trajets.*
    FROM trajets 
    JOIN reservations ON trajets.id_trajet = reservations.id_trajet
    JOIN utilisateurs ON reservations.id_reserveur = utilisateurs.id_uti
    WHERE trajets.timestamp <= ? AND utilisateurs.email = ?
    ORDER BY trajets.timestamp
    `;
    let queryParams = [currentTime, email];

    const connection = await pool.getConnection();
    const [trajets] = await connection.query(query, queryParams);
    connection.release();

    res.status(200).json(trajets);
  } catch (error) {
    console.error("Error fetching passed trajets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
