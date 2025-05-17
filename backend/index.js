console.time("ASTU Chatmeat API is starting...");
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.routes.js'; 


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

