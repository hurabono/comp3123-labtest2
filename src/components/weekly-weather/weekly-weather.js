import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL } from '../../api';

const WeeklyWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Toronto Weekly Weather
  const city = "Toronto";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(WEATHER_API_URL(city));

        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    fetchWeather();
  }, []);

  // Forecast Data Settings
  const dailyForecast = [];
  let currentDay = null;

  if (weatherData) {
    weatherData.list.forEach((entry, index) => {
      const day = new Date(entry.dt * 1000).toLocaleDateString();
      if (!currentDay || currentDay !== day) {
        currentDay = day;
        dailyForecast.push(entry);
      }
    });
  }

  return (
    <div className="weather">
      <h2 className='weeklyTitle'>Weekly Weather Forecast</h2>
      <div className="forecast">
        {dailyForecast.map((day, index) => (
          <div key={index} className="daily-forecast">
            <p className="date">{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p className="temp">
              {Math.round(day.main.temp)}°C
            </p>
            <img
              alt="weather-icon"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;
