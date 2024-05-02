import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

// Route to cancel a reservation and update available seats
router.delete("/:reservationId", async (req, res) => {
  try {
    const reservationId = req.params.reservationId;

    // Fetch reservation details
    const reservationQuery =
      "SELECT id_trajet, nbr_place FROM reservations WHERE id_reservation = ?";
    const reservationParams = [reservationId];

    const connection = await pool.getConnection();
    const [reservationResult] = await connection.query(
      reservationQuery,
      reservationParams
    );

    if (reservationResult.length === 0) {
      connection.release();
      return res.status(404).json({ error: "Reservation not found." });
    }

    const { id_trajet, nbr_place } = reservationResult[0];

    // Delete reservation
    const deleteReservationQuery =
      "DELETE FROM reservations WHERE id_reservation = ?";
    const deleteReservationParams = [reservationId];

    await connection.query(deleteReservationQuery, deleteReservationParams);

    // Update available seats in trajets table
    const updateSeatsQuery =
      "UPDATE trajets SET nbr_place = nbr_place + ? WHERE id_trajet = ?";
    const updateSeatsParams = [nbr_place, id_trajet];

    await connection.query(updateSeatsQuery, updateSeatsParams);

    connection.release();

    res.status(200).json({ message: "Reservation canceled successfully." });
  } catch (error) {
    console.error("Error canceling reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
