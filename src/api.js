// My api Key
const WEATHER_API_KEY = "bac5f1cf72b088e8ee7519407d90ad1f"; 
  
// Current Weather api address
export const CURRENT_WEATHER_API_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

// Weekly Weather api address
export const WEATHER_API_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;