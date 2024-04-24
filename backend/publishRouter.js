import express from 'express';
import { pool } from './createPool.js'; // Import the pool from createPool.js

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {depart, arrivee, timestamp, nbr_place, prix, id_conducteur, id_voiture } = req.body;

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO trajets (depart, arrivee, timestamp, nbr_place, prix, id_conducteur, id_voiture) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [depart, arrivee, timestamp, nbr_place, prix, id_conducteur, id_voiture]
    );
    connection.release();

    res.status(201).json({ message: 'Journey published successfully' });
  } catch (error) {
    console.error('Error publishing journey:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
