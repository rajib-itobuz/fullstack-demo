import express from 'express';
import authRoutes from './routes/authroutes.js'
import { connectDb } from './dbConnect/dbConnect.js';
const port = 4000;
const app = express();

const url = 'mongodb://localhost:27017'
connectDb(url);

app.use(express.json());

app.use('/user', authRoutes)

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})