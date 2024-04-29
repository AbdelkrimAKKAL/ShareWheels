import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Endpoint to receive and store reported user data
router.post("/", async (req, res) => {
  // Extract the selected items and id_trajet from the request body
  const { SignalerUserID, TargetUserID, Description } = req.body;

  try {
    // Get a database connection from the pool
    const connection = await pool.getConnection();

    // Begin a transaction
    await connection.beginTransaction();

    try {
      // Insert the reported user data into the Signalements table
      await connection.query(
        "INSERT INTO Signalements (SignalerUserID, TargetUserID, Description) VALUES (?, ?, ?)",
        [SignalerUserID, TargetUserID, JSON.stringify(Description)]
      );

      await connection.commit();

      connection.release();

      res.status(200).json({ message: "User reported successfully" });
    } catch (error) {
      await connection.rollback();

      connection.release();

      console.error("Error reporting user:", error);
      res.status(500).json({ error: "Failed to report user" });
    }
  } catch (error) {
    console.error("Error reporting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
