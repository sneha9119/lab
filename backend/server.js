const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Connect to Database
connectDB()
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((error) => {
    console.error("❌ Database Connection Error:", error);
    process.exit(1); // Exit process on DB failure
  });

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/exchange", require("./routes/exchangeRoutes"));

// Root Route
app.get("/", (req, res) => {
  res.status(200).send("🚀 Skill Exchange API is running...");
});

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "API route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

