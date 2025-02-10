const express = require("express");
const axios = require("axios");
const router = express.Router();

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Route to fetch weather data
router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    const response = await axios.get(url);
    const weatherData = response.data;
    res.json({
      // city: response.data.name,
      // temp: response.data.main.temp,
      // humidity: response.data.main.humidity,
      // description: response.data.weather[0].description,
      city: weatherData.name,
      temp: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      icon: weatherData.weather[0].icon,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
