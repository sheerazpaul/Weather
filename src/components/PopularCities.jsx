import { useWeather } from '../context/WeatherContext';

const POPULAR_CITIES = ['New York', 'Tokyo', 'Paris', 'Sydney', 'Dubai'];

export default function PopularCities() {
  const { fetchWeather } = useWeather();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold px-1 tracking-tight">Popular Cities</h3>
      <div className="space-y-3">
        {POPULAR_CITIES.map((city) => (
          <button
            key={city}
            onClick={() => fetchWeather(city)}
            className="glass-card w-full p-5 flex items-center justify-between cursor-pointer hover:bg-white/60 dark:hover:bg-white/5 transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="bg-secondary-container/30 p-3 rounded-full">
                <span className="material-symbols-outlined text-secondary">cloud</span>
              </div>
              <div>
                <h4 className="text-sm font-bold">{city}</h4>
                <p className="text-xs text-on-surface-variant mt-0.5">Tap to view weather</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
          </button>
        ))}
      </div>
    </div>
  );
}
