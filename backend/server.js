import express from 'express';
import usersRoutes from './usersRoutes.js';
import signupRoutes from './signupRoutes.js';
import loginRouter from './loginRouter.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRouter);

app.listen(port, () => {
  console.log(`Server is running on http://192.168.1.107:${port}`);
});
