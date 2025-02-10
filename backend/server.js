require("dotenv").config();
const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(cors({ origin: "https://weather-i3aza1fj7-shubhams-projects-3f44c3ff.vercel.app" }));
app.use(express.json());

// Routes
app.use("/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
