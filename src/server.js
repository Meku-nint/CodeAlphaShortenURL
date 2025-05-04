import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './config/ConnetDb.js';
import autoRoute from './routes/route.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/urlShortener',autoRoute);
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});
