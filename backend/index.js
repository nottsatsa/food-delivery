// import express from 'express';
// import { connectMongoDB } from './connectDB.js';

// const port = 8000;
// const app = express();

// connectMongoDB();
// app.get('/', (req, res) => {
//   res.send('hello');
// });

// app.listen(port, () => {
//   console.log(`server running at http://localhost:${port}`);
// });

import express, { json } from 'express';
import { connectMongoDB } from './connectDB.js';
import { turshiltRouter } from './router/tushilt.js';
import cors from 'cors';
import { userRouter } from './router/user.js';

// const port = 8000;
const port = process.env.PORT;
const app = express();

connectMongoDB();
// app.get('/', (req, res) => {
//   res.send('hello');
// });
app.use(json());
app.use(cors());
// app.use(turshiltRouter);

app.use(userRouter);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
