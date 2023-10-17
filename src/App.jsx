import React, { useState } from 'react';
import Search from './components/Search';
import LocationWeather from './components/LocationWeather';
import weather from './utils/api/weather';

function App() {
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [search, setSearch] = useState(false);

  const handleSearchCity = async (city) => {
    const dataWeather = await weather(city);
    setWeatherForecast(dataWeather);
    setSearch(true);
  };

  return (
    <div className="min-h-screen">
      <header className="mt-3">
        <h1 className="font-poppins text-center text-slate-50 text-lg">
          Weather Forecast
        </h1>
      </header>
      <main className="mt-3 min-h-screen">
        <Search onSearch={handleSearchCity} />
        {search && <LocationWeather {...weatherForecast} />}
      </main>
    </div>
  );
}

export default App;
