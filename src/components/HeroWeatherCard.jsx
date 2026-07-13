import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';
import { getWeatherIconUrl, formatTime } from '../api/weather';

export default function HeroWeatherCard() {
  const { weather } = useWeather();
  const { convertTemp, tempSymbol } = useSettings();

  if (!weather) return null;

  return (
    <div className="md:col-span-8 glass-card p-8 md:p-10 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group hover-lift">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            location_on
          </span>
          <span className="text-sm font-medium text-on-surface-variant tracking-wider uppercase">
            {weather.name}, {weather.sys.country} &bull;{' '}
            {formatTime(weather.dt, weather.timezone)}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-8xl md:text-[96px] font-bold weather-text-gradient leading-none tracking-tight">
            {convertTemp(weather.main.temp)}&deg;
          </span>
          <span className="text-3xl text-on-surface-variant opacity-50 font-light">{tempSymbol}</span>
        </div>
        <div className="flex flex-col gap-1.5 mt-4">
          <span className="text-2xl font-semibold text-on-surface capitalize">
            {weather.weather[0].description}
          </span>
          <span className="text-base text-on-surface-variant">
            High: {convertTemp(weather.main.temp_max)}&deg; &bull; Low:{' '}
            {convertTemp(weather.main.temp_min)}&deg;
          </span>
        </div>
      </div>
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center">
        <img
          src={getWeatherIconUrl(weather.weather[0].icon)}
          alt={weather.weather[0].description}
          className="w-48 h-48 drop-shadow-lg"
        />
      </div>
    </div>
  );
}
