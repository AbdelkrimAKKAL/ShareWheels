import express from "express";
import signupRoutes from "./Post/signupRoutes.js";
import loginRouter from "./Post/loginRouter.js";
import publishRouter from "./Post/publishRouter.js";
import rechercheRouter from "./Get/rechercheRouter.js";
import voituresRouter from "./Post/AjoutervoituresRouter.js";
import reserverRouter from "./Post/reserverRouter.js";
import getUserDataRouter from "./Get/getUserDataRouter.js";

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

app.listen(port, () => {
  console.log(`Server is running on http://192.168.1.107:${port}`);
});
