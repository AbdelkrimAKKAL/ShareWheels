import express from "express";
import { pool } from "../createPool.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { id_trajet, depart, arrivee, timestamp, passengers } = req.body;
    console.log(id_trajet, depart, arrivee, timestamp, passengers);

    if (id_trajet) {
      let query = `
          SELECT *
          FROM trajets 
          JOIN utilisateurs ON trajets.id_conducteur = utilisateurs.id_uti
          WHERE trajets.id_trajet = ?
        `;
      let queryParams = [id_trajet];
      const connection = await pool.getConnection();
      const [trajets] = await connection.query(query, queryParams);
      connection.release();
      res.status(200).json(trajets);
    } else {
      let query = `
        SELECT *
        FROM trajets 
        JOIN utilisateurs ON trajets.id_conducteur = utilisateurs.id_uti
        JOIN voitures ON trajets.id_voiture = voitures.matricule
          WHERE trajets.depart = ? AND trajets.arrivee = ?
        `;
      let queryParams = [depart, arrivee];
      if (timestamp) {
        query += " AND trajets.timestamp >= ?";
        queryParams.push(timestamp);
      }

      const connection = await pool.getConnection();
      const [trajets] = await connection.query(query, queryParams);
      connection.release();
      console.log("trajets:", trajets);

      const filteredTrajets = trajets.filter((trajet) => {
        return trajet.nbr_place >= passengers;
      });

      console.log("filtered trajets:", filteredTrajets);
      res.status(200).json(filteredTrajets);
    }
  } catch (error) {
    console.error("Error fetching trajets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
