import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

// Update user rating endpoint
router.put("/:email", async (req, res) => {
  const userId = req.params.email;
  const { newRating } = req.body;

  try {
    // Update user rating
    const userConnection = await pool.getConnection();
    await userConnection.query(
      "UPDATE utilisateurs SET total_rating = total_rating + ?, num_ratings = num_ratings + 1 WHERE email = ?",
      [newRating, userId]
    );
    userConnection.release();

    await userConnection.query(
        "UPDATE utilisateurs SET total_rating = total_rating / num_ratings WHERE email = ?",
        [userId]
      );
      userConnection.release();

    res.status(200).json({ message: "User rating updated successfully" });
  } catch (error) {
    console.error("Error updating user rating:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
