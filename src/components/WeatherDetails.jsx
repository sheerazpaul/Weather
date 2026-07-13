import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';

export default function WeatherDetails() {
  const { weather } = useWeather();
  const { convertTemp, convertWind, tempSymbol, windSymbol } = useSettings();

  if (!weather) return null;

  const details = [
    {
      icon: 'thermostat',
      label: 'Feels Like',
      value: `${convertTemp(weather.main.feels_like)}${tempSymbol}`,
    },
    {
      icon: 'humidity_percentage',
      label: 'Humidity',
      value: `${weather.main.humidity}%`,
    },
    {
      icon: 'air',
      label: 'Wind Speed',
      value: `${convertWind(weather.wind.speed)} ${windSymbol}`,
    },
    {
      icon: 'compress',
      label: 'Pressure',
      value: `${weather.main.pressure} hPa`,
    },
  ];

  return (
    <div className="md:col-span-4 grid grid-cols-2 gap-5 glass-card p-7 hover-lift">
      {details.map((d) => (
        <div key={d.label} className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="material-symbols-outlined text-[20px]">{d.icon}</span>
            <span className="text-sm font-medium">{d.label}</span>
          </div>
          <span className="text-xl font-bold">{d.value}</span>
        </div>
      ))}
      <div className="col-span-2 mt-3 p-5 rounded-2xl bg-primary/5 flex items-center justify-between border border-primary/10">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <div>
            <p className="text-sm opacity-60">Visibility</p>
            <p className="text-base font-semibold">
              {(weather.visibility / 1000).toFixed(1)} km
            </p>
          </div>
        </div>
        <span className="material-symbols-outlined text-primary">arrow_forward_ios</span>
      </div>
    </div>
  );
}
