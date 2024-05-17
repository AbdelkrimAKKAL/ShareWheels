import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

// Update user rating endpoint
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const { newRating } = req.body;

  try {
    // Update user rating
    const userConnection = await pool.getConnection();
    await userConnection.query(
      `UPDATE utilisateurs 
      SET 
        total_rating = CASE 
                         WHEN num_ratings = 0 THEN ? 
                         ELSE ((total_rating * num_ratings) + ?) / (num_ratings+1)
                       END,
        num_ratings = CASE 
                        WHEN num_ratings = 0 THEN 1 
                        ELSE num_ratings + 1 
                      END
      WHERE id_uti = ?`,
     [newRating, newRating, userId]
    );
    userConnection.release();

    res.status(200).json({ message: "User rating updated successfully" });
  } catch (error) {
    console.error("Error updating user rating:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
