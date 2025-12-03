const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurants");
const reviewRoutes = require("./routes/reviews");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB Connect
connectDB();

// For Testing
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Route
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
