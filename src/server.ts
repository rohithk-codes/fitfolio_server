import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/fitfolio";

app.use(express.json());

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