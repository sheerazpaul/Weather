import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';
import { getWeatherIconUrl } from '../api/weather';

export default function HourlyForecast() {
  const { forecast } = useWeather();
  const { convertTemp } = useSettings();

  if (!forecast) return null;

  const hourly = forecast.list.slice(0, 10);

  return (
    <div className="md:col-span-12 glass-card p-8 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold tracking-tight">Hourly Forecast</h3>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
        {hourly.map((item, i) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
          });
          return (
            <div
              key={item.dt}
              className="flex-shrink-0 flex flex-col items-center glass-dark px-6 py-5 rounded-2xl hover-lift cursor-pointer group min-w-[110px]"
            >
              <span className="text-sm font-medium mb-4 opacity-60 whitespace-nowrap">
                {i === 0 ? 'Now' : time}
              </span>
              <img
                src={getWeatherIconUrl(item.weather[0].icon)}
                alt={item.weather[0].description}
                className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold mb-1">
                {convertTemp(item.main.temp)}&deg;
              </span>
              <span className="text-sm text-secondary opacity-80 font-medium">
                {Math.round(item.pop * 100)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
