import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './config/ConnetDb.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});
