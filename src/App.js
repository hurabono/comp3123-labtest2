import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import WeeklyWeather from './components/weekly-weather/weekly-weather';
import Title from './components/title/title';

function App() {
  return (
    <div className="container">
      <Title/>
      <CurrentWeather />
      <WeeklyWeather/>
    </div>
  );
}

export default App;
