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

        // Get user ID
        const userId = userData[0].id_uti;
        const userName = userData[0].nom;

        
        // Get notifications along with sender name
        const notificationsConnection = await pool.getConnection();
        const [notifications] = await notificationsConnection.query(
            `SELECT notifications.*, senders.nom as sender_name, senders.prenom as sender_prenom, senders.photo as pdp 
             FROM notifications 
             JOIN Utilisateurs as senders ON notifications.id_sender = senders.id_uti 
             WHERE notifications.id_uti = ?
             ORDER BY time DESC`,
            [userId]
        );
        notificationsConnection.release();
        
        console.log(notifications);

        res.status(200).json(notifications);

    } catch (error) {
        console.error("Error retrieving user Notifications :", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
