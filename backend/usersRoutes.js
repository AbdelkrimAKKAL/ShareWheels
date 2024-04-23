import express from 'express';
import { pool } from './createPool.js'; // Import the pool from createPool.js

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query('SELECT nom FROM Utilisateurs where id_uti=1;');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
