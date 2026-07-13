import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';
import { getWeatherIconUrl, groupForecastByDay } from '../api/weather';

export default function DailyForecast() {
  const { forecast } = useWeather();
  const { convertTemp } = useSettings();

  if (!forecast) return null;

  const days = groupForecastByDay(forecast).slice(0, 7);

  return (
    <div className="md:col-span-6 glass-card p-8 hover-lift">
      <h3 className="text-2xl font-semibold mb-6 tracking-tight">7-Day Forecast</h3>
      <div className="flex flex-col gap-3">
        {days.map((day, i) => (
          <div
            key={day.date}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/30 dark:hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-5 w-1/3">
              <span className="text-base font-medium w-28">
                {i === 0 ? 'Today' : day.date.split(',')[0]}
              </span>
              <img
                src={getWeatherIconUrl(day.weather.icon)}
                alt={day.weather.description}
                className="w-9 h-9"
              />
            </div>
            <span className="text-base text-on-surface-variant w-1/3 text-center capitalize">
              {day.weather.description}
            </span>
            <span className="text-lg font-bold w-1/3 text-right">
              {convertTemp(day.tempMax)}&deg;/{convertTemp(day.tempMin)}&deg;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
