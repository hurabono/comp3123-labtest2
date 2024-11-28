import './current-weather.css';
import React, { useState, useEffect } from 'react';
import { CURRENT_WEATHER_API_URL } from '../../api';  // API import

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null); 


  useEffect(() => {
    const fetchWeather = async () => {
        const response = await fetch(CURRENT_WEATHER_API_URL("Toronto"));

        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data); 
    };

    fetchWeather(); 
  }, []);


if (weatherData && weatherData.main) {
    return (
      <div className="weather">
        <div className="top">
          <div className="weather-info-box">
            <p className="city">{weatherData.name}</p>
            <p className="temp">{weatherData.main.temp}°C</p>
            <div className="small-info">
              <p className="weather-description">
                {weatherData.weather[0].description}
              </p>
              <p className="feels">Feels like {weatherData.main.feels_like}°C</p>
            </div>
          </div>

          <div className="weather-icon-box">
            <img
              alt="weather"
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            />
          </div>
        </div>
      </div>
    );
  } 
};

export default CurrentWeather;
