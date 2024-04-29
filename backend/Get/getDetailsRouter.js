import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { id_trajet } = req.query;

  if (!id_trajet) {
    return res.status(400).json({ error: "id_trajet parameter is required" });
  }

  try {
    const connection = await pool.getConnection();

    try {
      const result = await connection.query(
        "SELECT details_text FROM details WHERE id_trajet = ?",
        [id_trajet]
      );

      const detailsText = result[0][0].details_text;
      res.status(200).json({ detailsText });
    } catch (error) {
      console.error("Error retrieving details_text:", error);
      res.status(500).json({ error: "Failed to retrieve details_text" });
    }
  } catch (error) {
    console.error("Error retrieving details_text:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
