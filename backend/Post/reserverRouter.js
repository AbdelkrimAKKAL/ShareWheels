// Assuming you already have express and pool imported
import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

// Route to handle making a reservation
router.post("/", async (req, res) => {
  try {
    const { id_trajet, id_reserveur, nbr_place } = req.body;

    // Validate required fields
    if (!id_trajet || !id_reserveur || !nbr_place) {
      return res
        .status(400)
        .json({
          error: "id_trajet, id_reserveur, and nbr_places are required.",
        });
    }

    // Check available seats
    const availableSeatsQuery =
      "SELECT nbr_place FROM trajets WHERE id_trajet = ?";
    const availableSeatsParams = [id_trajet];

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      availableSeatsQuery,
      availableSeatsParams
    );
    connection.release();

    if (result.length === 0) {
      return res.status(404).json({ error: "Trajet not found." });
    }

    const availableSeats = result[0].nbr_place;

    if (nbr_place > availableSeats) {
      return res.status(400).json({ error: "Not enough available seats." });
    }

    // Update available seats in trajets table
    const updateSeatsQuery =
      "UPDATE trajets SET nbr_place = nbr_place - ? WHERE id_trajet = ?";
    const updateSeatsParams = [nbr_place, id_trajet];

    const updateConnection = await pool.getConnection();
    await updateConnection.query(updateSeatsQuery, updateSeatsParams);
    updateConnection.release();

    // Insert reservation
    const insertReservationQuery =
      "INSERT INTO reservations (id_trajet, id_reserveur, nbr_place) VALUES (?, ?, ?)";
    const insertReservationParams = [id_trajet, id_reserveur, nbr_place];

    const insertConnection = await pool.getConnection();
    await insertConnection.query(
      insertReservationQuery,
      insertReservationParams
    );
    insertConnection.release();

    res.status(201).json({ message: "Reservation made successfully." });
  } catch (error) {
    console.error("Error making reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
