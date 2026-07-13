import { useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
import SearchBar from '../components/SearchBar';
import HeroWeatherCard from '../components/HeroWeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import PrecipitationMap from '../components/PrecipitationMap';
import { getGreeting } from '../api/weather';

export default function HomePage() {
  const { weather, fetchWeather, loading, error } = useWeather();

  useEffect(() => {
    if (!weather) fetchWeather('London');
  }, []);

  return (
    <>
      <section className="flex flex-col items-center text-center mb-10">
        <SearchBar />
        <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight text-on-surface">
          {getGreeting()}, {weather?.name || 'World'}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl mx-auto">
          {weather
            ? `${weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)} with visibility of ${(weather.visibility / 1000).toFixed(0)} km.`
            : 'Search for a city to see the weather.'}
        </p>
      </section>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-14 h-14 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-error text-xl">{error}</p>
        </div>
      )}

      {weather && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <HeroWeatherCard />
          <WeatherDetails />
          <HourlyForecast />
          <DailyForecast />
          <PrecipitationMap />
        </div>
      )}
    </>
  );
}
