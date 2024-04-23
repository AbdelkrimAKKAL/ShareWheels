import express from 'express';
import { pool } from './createPool.js'; // Import the pool from createPool.js

const router = express.Router();

router.post('/publish', async (req, res) => {
  try {
    const { départ, arrivé, timestamp, prix, id_conducteur, id_voiture } = req.body;

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO trajets (départ, arrivé, timestamp, nbr_place, prix, id_conducteur, id_voiture, ajout) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)',
      [départ, arrivé, timestamp, nbr_place, prix, id_conducteur, id_voiture]
    );
    connection.release();

    res.status(201).json({ message: 'Journey published successfully' });
  } catch (error) {
    console.error('Error publishing journey:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
