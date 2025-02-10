import React, { useRef, useState } from "react";
import './Weather.css';
import search_icon from "./assets/search.png"
import clear_icon from "./assets/clear.png"
import cloud_icon from './assets/cloud.png'
import drizzle_icon from './assets/drizzle.png'
import rain_icon from './assets/rain.png'
import snow_icon from './assets/snow.png'
import wind_icon from './assets/wind.png'
import humidity_icon from './assets/humidity.png'
import { useEffect } from "react";

const WeatherApp = () => {
  // const [city, setCity] = useState("");
  // const [weather, setWeather] = useState(null);

  // const handleSearch = async () => {
  // console.log(`Searching weather for ${city}`);
  // API Call will be added later
  //   if (!city) return;

  //   try {
  //     // const response = await fetch(`http://localhost:5003/weather?city=${city}`);
  //     const response = await fetch(`http://localhost:5003/weather/${city}`);
  //     if (!response.ok) throw new Error("Failed to fetch weather data");

  //     const data = await response.json();
  //     setWeather(data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };

  const [weatherData, setWeatherData] = useState(false);

  const inputRef = useRef();

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const search = async (city) => {
    if (city === "") {
      alert("Enter the city name");
      return;
    }

    try {
      // const url = `# https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.OPENWEATHER_API_KEY}`;
      // const url = `http://localhost:5003/weather/${city}`;
      const API_URL = "https://weather-app-2jrm.onrender.com";  // Use deployed backend URL
      const url = `${API_URL}/weather/${city}`;

      const response = await fetch(url);
      const data = await response.json();


      if(!response.ok) {
        alert(data.message);
        return;
      }

      // const icon = allIcons[data.weather[0].icon] || clear_icon;
      // setWeatherData({
      //   humidity: data.main.humidity,
      //   windSpeed: data.wind.speed,
      //   temperature: Math.floor(data.main.temp),
      //   location: data.name,
      //   icon: icon,
      // })
      const icon = allIcons[data.icon] || clear_icon;
        setWeatherData({
          humidity: data.humidity,
          windSpeed: data.windSpeed,
          temperature: Math.floor(data.temp),
          location: data.city,
          icon: icon,
      });


    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching the data", error);
    }
  }

  useEffect(() => {
    search("London");
  },[]);

  return (

    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Enter the city name" />
        <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
      </div>

      {weatherData ? <>
        <img src={weatherData.icon} alt="" className="weather-icon" />
        <p className="temperature">{weatherData.temperature}°C</p>
        <p className="location">{weatherData.location}</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="" />
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </div>
      </> : <></>}


    </div>
  );
};

export default WeatherApp;
