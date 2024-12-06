
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoutes from './routes/reservationRoutes.js';
import userRoutes from "./routes/user.js";

dotenv.config(); // Load environment variables

const app = express();

// Configure CORS to allow the frontend origin
app.use(cors({
  origin: "http://localhost:5173", // Reads FRONTEND_URL from .env
  methods: ["POST", "GET"], // Specify allowed methods
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/reservation', reservationRoutes); // Define reservation routes
app.use('/users', userRoutes)

// Initialize database connection
dbConnection();

// Root endpoint (optional)
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Error handling middleware
app.use(errorMiddleware);

export default app;

