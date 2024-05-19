import express from "express";
import { pool } from "../createPool.js";
import moment from 'moment';

const router = express.Router();

// Update user rating endpoint
router.put("/:userId/:emailSender", async (req, res) => {
  const { userId, emailSender } = req.params;
  const { newRating } = req.body;

  try {
    // Update user rating
    const userConnection = await pool.getConnection();
    await userConnection.query(
      `UPDATE utilisateurs 
      SET 
        total_rating = CASE 
                         WHEN num_ratings = 0 THEN ? 
                         ELSE ((total_rating * num_ratings) + ?) / (num_ratings + 1)
                       END,
        num_ratings = CASE 
                        WHEN num_ratings = 0 THEN 1 
                        ELSE num_ratings + 1 
                      END
      WHERE id_uti = ?`,
      [newRating, newRating, userId]
    );
    userConnection.release();

    console.log(emailSender);

    // Get the id of the sender
    const connection3 = await pool.getConnection();
    const [senderIdResult] = await connection3.query(
      `SELECT id_uti 
       FROM utilisateurs 
       WHERE email = ?`,
      [emailSender]
    );
    connection3.release();

    if (senderIdResult.length === 0) {
      return res.status(404).json({ error: "Sender not found" });
    }

    const senderId = senderIdResult[0].id_uti;
    console.log("userid", userId);
    console.log("senderId", senderId);
    // Add a notification
    const currentTime = moment().format('YYYY-MM-DD HH:mm');
    const message = `You have received a new rating of: ${newRating} stars`;
    const connection2 = await pool.getConnection();
    await connection2.query(
      'INSERT INTO notifications (id_uti, id_sender, titre, body, time) VALUES (?, ?, ?, ?, ?)',
      [userId, senderId, "Rating", message, currentTime]
    );
    connection2.release();

    res.status(200).json({ message: "User rating updated successfully" });
  } catch (error) {
    console.error("Error updating user rating:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
