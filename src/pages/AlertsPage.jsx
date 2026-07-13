import { useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
import AlertBanner from '../components/AlertBanner';
import ActiveAlerts from '../components/ActiveAlerts';
import ClimateTrends from '../components/ClimateTrends';
import FavoriteLocations from '../components/FavoriteLocations';
import AirQuality from '../components/AirQuality';

export default function AlertsPage() {
  const { weather, fetchWeather, loading } = useWeather();

  useEffect(() => {
    if (!weather) fetchWeather('London');
  }, []);

  return (
    <>
      <AlertBanner />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        <div className="lg:col-span-4">
          <ActiveAlerts />
        </div>
        <div className="lg:col-span-8">
          <ClimateTrends />
        </div>
      </div>

      <FavoriteLocations />
      <AirQuality />

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined text-[32px]">notification_important</span>
        <span className="absolute right-full mr-4 bg-on-surface text-surface text-xs px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
          Get Daily Briefing
        </span>
      </button>
    </>
  );
}
