import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();

const app = express();
const PORT = process.env.PORT ;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
 app.use(cors())
// Connect to MongoDB
mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes


// Start server
app.listen(PORT, () => {
   
    console.log(`Server running at http://localhost:${PORT}`);
});