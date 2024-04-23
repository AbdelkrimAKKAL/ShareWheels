// Import necessary modules
import express from 'express';
import { pool } from './createPool.js';

const router = express.Router();

// Route to handle login requests
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if the email exists in the database
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT * FROM Utilisateurs WHERE email = ?',
      [email]
    );
    connection.release();

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = rows[0];

    // Check if the provided password matches the stored password
    if (user.mdp !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // If email and password are correct, return success response
    res.status(200).json({ message: 'Login successful', user: { nom: user.nom, email: user.email } });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
