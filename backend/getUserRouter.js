// // Import necessary modules
// import express from 'express';
// import { pool } from './createPool.js';

// const router = express.Router();

// // Route to fetch user data by email
// router.get('/:email', async (req, res) => {
//   try {
//     const { email } = req.params;

//     // Fetch user data from the database
//     const connection = await pool.getConnection();
//     const [rows] = await connection.query(
//       'SELECT nom, prenom, num_tel, photo, est_certifie, genre FROM Utilisateurs WHERE email = ?',
//       [email]
//     );
//     connection.release();


//     // If user exists, return user data
//     const userData = rows[0];
//     res.status(200).json({ user: userData });
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// export default router;
