import express from "express";
import { pool } from "../createPool.js"; // Import the pool from createPool.js
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer'
import { USER, APP_PASSWORD, EMAIL_RECEIVER } from '../../env.js';





const router = express.Router();
    let created = false

// Function to generate a random verification code
function generateVerificationCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let verificationCode = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        verificationCode += characters[randomIndex];
    }
    return verificationCode;
}

router.post("/", async (req, res) => {
    try {
        const { email } = req.body;

        const connection = await pool.getConnection();
        const [rows] = await connection.query(
            "SELECT * FROM Utilisateurs WHERE email = ?",
            [email]
        );
        connection.release();

        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }



        const user = rows[0];

        const secret = process.env.JWT_SECRET + user.mdp
        const token = jwt.sign({ email: email, id: user.id_uti }, secret, { expiresIn: "5m" })

        const code = generateVerificationCode()
        console.log("THIS IS VERIFICATION CODE CHECK EMAIL:", code);


        if (!created) {
            try {
                const connection3 = await pool.getConnection();
                await connection.query(
                    "ALTER TABLE Utilisateurs ADD COLUMN code varchar(30)",
                );
                created = true; // Set the 'created' flag to true
                connection3.release();
            } catch (error) {
                console.error('Error adding column:', error);
            }
        }
        


        const connection2 = await pool.getConnection();
        const updateResult = await connection2.query(
            "UPDATE Utilisateurs SET code = ? WHERE email = ?",
            [code, email]
        );
    
        connection2.release();
        


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com', // Specify your SMTP server host
            port: 587, // Specify the port for SMTP (587 is a common port for TLS/STARTTLS)
            secure: false, // true for 465, false for other ports; if true, TLS/STARTTLS is used
            auth: {
                user: USER, // Specify your SMTP username
                pass: APP_PASSWORD, // Specify your SMTP password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: {
                name: 'ShareWheelsApp',
                address: USER,
            },
            to: EMAIL_RECEIVER, // change it later to 'email'
            subject: 'Password Reset',
            text: `This is your verification code : ${code}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Failed to send reset link' });
            } else {
                console.log('Email sent:', info.response);
                res.status(200).json({ message: 'Reset link sent successfully' });
            }
        });


        res.status(200).json({
            message: "User found",
            code,
            email: email
        });
    } catch (error) {
        console.error(":", error);
        res.status(500).json({ error: "" });
    }
});

export default router;
