import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

router.post("/:email", async (req, res) => {
  const { email } = req.params;
  const { name,prenom, newEmail, photo, num_tel } = req.body;
  console.log(name,prenom, newEmail); 

  try {
    const emailCheckConnection = await pool.getConnection();
    const [existingUserWithEmail] = await emailCheckConnection.query(
      "SELECT * FROM Utilisateurs WHERE email = ? AND email != ?",
      [newEmail, email]
    );
    emailCheckConnection.release();

    if (existingUserWithEmail.length > 0) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Check if the new phone number is already taken
    const phoneCheckConnection = await pool.getConnection();
    const [existingUserWithPhone] = await phoneCheckConnection.query(
      "SELECT * FROM Utilisateurs WHERE num_tel = ? AND email != ?",
      [num_tel, email]
    );
    phoneCheckConnection.release();

    if (existingUserWithPhone.length > 0) {
      return res.status(400).json({ error: "Phone number already in use" });
    }

    // Update user information
    const userConnection = await pool.getConnection();
    await userConnection.query(
      "UPDATE Utilisateurs SET nom = ? ,prenom = ? , email = ?, photo = ?, num_tel = ? WHERE email = ?",
      [name,prenom, newEmail, photo, num_tel, email]
    );
    userConnection.release();

    res.status(200).json({ message: "User information updated successfully" });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

  

export default router;
