import React, { useState } from "react";
import axios from "axios";

const API_KEY = "8037545541565085eb9983cb64dfafe8";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError("City not found! Please enter a valid city name.");
      setWeather(null);
    }
  };

  return (
    <div className="body">
    <div className="blue"/>
      <div className="clouds1" />
      <div className="clouds2" />
      <div className="clouds3" />
      <div className="clouds4" />

      <div className="weather-app">
        <h1 className="heading">Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherData}>Get Weather</button>

        {error && <div className="error">{error}</div>}

        {weather && (
          <div className="weather-data">
            <h2 className="head2">{weather.name}</h2>
            <img
              className="image"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="weather icon"
            />
            <div>
              Temperature:{" "}
              {(((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)}°F
            </div>
            <div>Weather: {weather.weather[0].main}</div>
            <div>Humidity: {weather.main.humidity}%</div>
            {/* Add more information like humidity here */}
          </div>
        )}
      </div>
      <div className='clouds'/>
    </div>
  );
};

export default WeatherApp;
