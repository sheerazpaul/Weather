import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';
import { formatTime } from '../api/weather';

export default function WeatherHighlights() {
  const { weather } = useWeather();
  const { convertTemp, tempSymbol } = useSettings();

  if (!weather) return null;

  const highlights = [
    { icon: 'thermostat', label: 'Feels Like', value: `${convertTemp(weather.main.feels_like)}${tempSymbol}`, color: 'text-tertiary' },
    { icon: 'humidity_percentage', label: 'Humidity', value: `${weather.main.humidity}%`, color: 'text-secondary' },
    { icon: 'air', label: 'Wind', value: `${weather.wind.speed} m/s`, color: 'text-primary' },
    { icon: 'cloud', label: 'Cloud Cover', value: `${weather.clouds.all}%`, color: 'text-primary' },
    { icon: 'compress', label: 'Pressure', value: `${weather.main.pressure} hPa`, color: 'text-tertiary' },
    { icon: 'visibility', label: 'Visibility', value: `${(weather.visibility / 1000).toFixed(1)} km`, color: 'text-primary' },
  ];

  const sunrise = formatTime(weather.sys.sunrise, weather.timezone);
  const sunset = formatTime(weather.sys.sunset, weather.timezone);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      <div className="glass-card p-7 flex flex-col justify-between h-52">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium text-on-surface-variant">Sunrise & Sunset</span>
          <span className="material-symbols-outlined text-tertiary">wb_sunny</span>
        </div>
        <div className="relative w-full h-16 my-3">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
            <path d="M0,40 Q50,-10 100,40" fill="none" stroke="currentColor" className="text-outline-variant" strokeWidth="2" />
            <path className="sun-path text-primary" d="M0,40 Q50,-10 70,12" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="70" cy="12" fill="currentColor" className="text-primary" r="3" />
          </svg>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-sm font-bold">{sunrise}</span>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">Sunrise</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm font-bold">{sunset}</span>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">Sunset</span>
          </div>
        </div>
      </div>

      {highlights.map((h) => (
        <div key={h.label} className="glass-card p-7 flex flex-col justify-between h-52">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-on-surface-variant">{h.label}</span>
            <span className={`material-symbols-outlined ${h.color}`}>{h.icon}</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-bold">{h.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
