import express from "express";
import { pool } from "../createPool.js"; 

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Endpoint to receive and store checkbox data
router.post("/", async (req, res) => {
  // Extract the selected items and id_trajet from the request body
  const { id_trajet, details_text } = req.body;

  try {
    // Get a database connection from the pool
    const connection = await pool.getConnection();

    // Begin a transaction
    await connection.beginTransaction();

    try {
      // Insert the selected items into the details table
      await connection.query(
        "INSERT INTO details (id_trajet, details_text) VALUES (?, ?)",
        [id_trajet, JSON.stringify(details_text)]
      );

      await connection.commit();

      connection.release();

      res.status(200).json({ message: "Selected items stored successfully" });
    } catch (error) {
      await connection.rollback();

      connection.release();

      res.status(500).json({ error: "Failed to store selected items" });
    }
  } catch (error) {
    console.error("Error storing selected items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
