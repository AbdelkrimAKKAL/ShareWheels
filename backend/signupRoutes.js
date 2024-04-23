import express from 'express';
import { pool } from './createPool.js'; // Import the pool from createPool.js

const router = express.Router();

router.post('/', async (req, res) => { // Change '/api/signup' to '/'
  try {
    const { nom, prenom, mdp, num_tel, photo, email, genre } = req.body;

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO Utilisateurs (nom, prenom, mdp, num_tel, photo, email, genre) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nom, prenom, mdp, num_tel, photo, email, genre]
    );
    connection.release();

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
