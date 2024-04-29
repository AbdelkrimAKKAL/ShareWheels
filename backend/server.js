import express from "express";
import signupRoutes from "./Post/signupRoutes.js";
import loginRouter from "./Post/loginRouter.js";
import publishRouter from "./Post/publishRouter.js";
import rechercheRouter from "./Get/rechercheRouter.js";
import voituresRouter from "./Post/AjoutervoituresRouter.js";
import reserverRouter from "./Post/reserverRouter.js";
import getUserDataRouter from "./Get/getUserDataRouter.js";
import EditUserRouter from './Get/EditUserRouter.js';
import deleteUserRouter from './Delete/deleteUserRouter.js';
import deleteTrajetRouter from './Delete/deleteTrajetRouter.js';
import rateRouter from './Post/rateRouter.js';
import detailsRouter from './Post/detailsRouter.js';
import getdetailsRouter from './Get/getDetailsRouter.js';
import getSignalmentsRouter from './Get/getSignalmentsRouter.js';
import signalerRouter from './Post/signalerRouter.js';


const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/publish", publishRouter);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRouter);
app.use("/api/getUserData", getUserDataRouter);
app.use("/api/recherche", rechercheRouter);
app.use("/api/voitures", voituresRouter);
app.use("/api/reserver", reserverRouter);
app.use("/api/EditUser", EditUserRouter);
app.use("/api/DeleteUser", deleteUserRouter);
app.use("/api/DeleteTrajet", deleteTrajetRouter);
app.use("/api/Rate", rateRouter);
app.use("/api/details", detailsRouter);
app.use("/api/getDetails", getdetailsRouter);
app.use("/api/getSignalments", getSignalmentsRouter);
app.use("/api/signaler", signalerRouter);





app.listen(port, () => {
  console.log(`Server is running on http://192.168.1.107:${port}`);
});
