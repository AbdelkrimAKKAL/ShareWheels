import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { email } = req.query;

    let query = `
      SELECT *
      FROM trajets 
      JOIN utilisateurs ON trajets.id_conducteur = utilisateurs.id_uti
      WHERE utilisateurs.email = ?
      ORDER BY trajets.timestamp
    `;
    let queryParams = [email];

    const connection = await pool.getConnection();
    const [trajets] = await connection.query(query, queryParams);
    connection.release();

    res.status(200).json(trajets);
  } catch (error) {
    console.error("Error fetching user's posted trajets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
