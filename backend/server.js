import express from 'express';
import signupRoutes from './signupRoutes.js';
import loginRouter from './loginRouter.js';
import publishRouter from './publishRouter.js'

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/publish', publishRouter);
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRouter);

app.listen(port, () => {
  console.log(`Server is running on http://192.168.1.107:${port}`);
});
