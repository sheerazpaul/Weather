import { useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
import MapSection from '../components/MapSection';
import WeatherHighlights from '../components/WeatherHighlights';
import ActivityTip from '../components/ActivityTip';
import PopularCities from '../components/PopularCities';
import WeatherNews from '../components/WeatherNews';

export default function ForecastPage() {
  const { weather, fetchWeather, loading } = useWeather();

  useEffect(() => {
    if (!weather) fetchWeather('London');
  }, []);

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-primary">Regional Forecast</h1>
          <p className="text-lg text-on-surface-variant mt-1">
            {weather ? `${weather.name}, ${weather.sys.country}` : 'Loading...'} &bull; Updated just now
          </p>
        </div>
        <div className="flex gap-3">
          <span className="bg-secondary-container/20 text-secondary px-5 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">verified</span> Precision Mode
          </span>
        </div>
      </header>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-14 h-14 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {weather && !loading && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-8 space-y-6">
            <MapSection />
            <WeatherHighlights />
          </section>
          <aside className="lg:col-span-4 space-y-6">
            <ActivityTip />
            <PopularCities />
            <WeatherNews />
          </aside>
        </div>
      )}
    </>
  );
}
