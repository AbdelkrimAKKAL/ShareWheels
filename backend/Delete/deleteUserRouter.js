import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();
router.delete("/:email", async (req, res) => {
    const { email } = req.params;
  
    try {
      // Temporarily disable foreign key checks
      await pool.query("SET FOREIGN_KEY_CHECKS = 0");
  
      // Check if the user exists
      const userConnection = await pool.getConnection();
      const [existingUser] = await userConnection.query(
        "SELECT * FROM Utilisateurs WHERE email = ?",
        [email]
      );
  
      if (existingUser.length === 0) {
        userConnection.release();
        return res.status(404).json({ error: "User not found" });
      }
  
      // Delete associated records in reservations table
      await userConnection.query(
        "DELETE FROM reservations WHERE id_reserveur = ?",
        [existingUser[0].id_uti]
      );
  
      // Delete associated records in voitures table
      await userConnection.query(
        "DELETE FROM voitures WHERE id_prop = ?",
        [existingUser[0].id_uti]
      );
  
      // Delete associated records in trajets table
      await userConnection.query(
        "DELETE FROM trajets WHERE id_conducteur = ?",
        [existingUser[0].id_uti]
      );
  
      // Delete associated records in signalments table
      await userConnection.query(
        "DELETE FROM signalements WHERE TargetUserID = ? OR SignalerUserID = ?",
        [existingUser[0].id_uti, existingUser[0].id_uti]
      );
  
      // Delete the user
      await userConnection.query(
        "DELETE FROM Utilisateurs WHERE email = ?",
        [email]
      );
      userConnection.release();
  
      // Re-enable foreign key checks
      await pool.query("SET FOREIGN_KEY_CHECKS = 1");
  
      res.status(200).json({ message: "User and associated records deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
export default router;