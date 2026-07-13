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
      <section className="flex flex-col items-center mb-10 text-center">
        <SearchBar />
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-primary md:text-6xl">
          {getGreeting()}, {weather?.name || 'World'}
        </h1>
        <p className="max-w-xl mx-auto text-xl text-on-surface-variant">
          {weather
            ? `${weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)} with visibility of ${(weather.visibility / 1000).toFixed(0)} km.`
            : 'Search for a city to see the weather.'}
        </p>
      </section>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="border-4 rounded-full w-14 h-14 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}

      {error && (
        <div className="py-12 text-center">
          <p className="text-xl text-error">{error}</p>
        </div>
      )}

      {weather && !loading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
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
