import React, { useState } from "react";
import './Weather.css';
import search_icon from "./assets/search.png"
import clear_icon from "./assets/clear.png"
import cloud_icon from './assets/cloud.png'
import drizzle_icon from './assets/drizzle.png'
import rain_icon from './assets/rain.png'
import snow_icon from './assets/snow.png'
import wind_icon from './assets/wind.png'
import humidity_icon from './assets/humidity.png'

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    // console.log(`Searching weather for ${city}`);
    // API Call will be added later
    if (!city) return;

    try {
      // const response = await fetch(`http://localhost:5003/weather?city=${city}`);
      const response = await fetch(`http://localhost:5003/weather/${city}`);
      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
    //   <h1 className="text-3xl font-bold mb-4">Weather App</h1>
    //   <input
    //     type="text"
    //     placeholder="Enter city name"
    //     value={city}
    //     onChange={(e) => setCity(e.target.value)}
    //     className="p-2 border rounded"
    //   />
    //   <button
    //     onClick={handleSearch}
    //     className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
    //   >
    //     Search
    //   </button>

    //   {weather && (
    //     <div className="mt-4">
    //       <h2 className="text-xl font-semibold">{weather.city}</h2>
    //       <p>Temperature: {weather.temp}°C</p>
    //       <p>Humidity: {weather.humidity}%</p>
    //     </div>
    //   )}
    // </div>

    // <div className="weather">
    //   <div className="search-bar">
    //     <input type="text" className="search-input" placeholder="Search" />
    //     <img src={search_icon} alt="" />
    //   </div>
    // </div>
    // <div className="weather-container">
    //   <div className="weather-card">
    //     <div className="search-bar">
    //       <input type="text" className="search-input" placeholder="Search" />
    //       <img src={search_icon} alt="Search" />
    //     </div>
    //     <img src={clear_icon} alt="" />
    //     <p>16°C</p>
    //     <p>London</p>
    //     <div className="weather-icon">
    //       <img src="" alt="Weather Icon" />
    //     </div>
    //     <div className="temperature">41°C</div>
    //     <div className="city-name">Delhi</div>
    //     <div className="weather-details">
    //       <div className="weather-detail">
    //         <img src="/path/to/humidity-icon.png" alt="Humidity Icon" />
    //         <span>20% Humidity</span>
    //       </div>
    //       <div className="weather-detail">
    //         <img src="/path/to/wind-icon.png" alt="Wind Icon" />
    //         <span>3.09 km/h</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Enter the city name" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">16 degree</p>
      <p className="location">London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
          <div className="col">
            <img src={wind_icon} alt="" />
            <div>
              <p>3.4 km</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
