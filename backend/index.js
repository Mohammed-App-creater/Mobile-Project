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

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("ASTU Chatmeat API is running");
});

app.use('/auth', authRoutes);
app.use('/chat', chatRoutes); // Assuming you have a chatRoutes file

// Start server
const startServer = async () => {
    try {
      await connectDB(); // Wait for DB connection
      app.listen(PORT, () => {
        console.timeEnd("ASTU Chatmeat API is starting...");
        console.log("✅ MongoDB connected successfully");
        console.log(`🚀 Server started on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("❌ Failed to start server:", error.message);
      process.exit(1);
    }
  };
  
  startServer();