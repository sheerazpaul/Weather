import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';

export default function AirQuality() {
  const { weather } = useWeather();
  const { convertWind, windSymbol } = useSettings();

  const humidity = weather?.main?.humidity || 64;
  const pressure = weather?.main?.pressure || 1012;
  const windSpeed = weather?.wind?.speed ? convertWind(weather.wind.speed) : 18;
  const aqi = 72;

  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="glass-card p-8">
        <h3 className="text-xl font-semibold mb-7 tracking-tight">Air Quality Index</h3>
        <div className="flex items-center gap-8">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-high" cx="68" cy="68" fill="transparent" r="58" stroke="currentColor" strokeWidth="12" />
              <circle className="text-tertiary" cx="68" cy="68" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset={364.4 - (aqi / 100) * 364.4} strokeWidth="12" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{aqi}</span>
              <span className="text-[10px] font-bold text-on-surface-variant">MODERATE</span>
            </div>
          </div>
          <div className="flex-grow space-y-5">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm text-on-surface-variant">PM 2.5</span>
                <span className="text-sm font-medium text-tertiary">42 &micro;g/m&sup3;</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[60%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm text-on-surface-variant">Ozone (O3)</span>
                <span className="text-sm font-medium text-primary">12 &micro;g/m&sup3;</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[20%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-8 grid grid-cols-2 gap-7">
        <div className="flex flex-col gap-1.5">
          <span className="material-symbols-outlined text-primary mb-1">water_lux</span>
          <span className="text-sm text-on-surface-variant">Humidity</span>
          <span className="text-xl font-bold">{humidity}%</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="material-symbols-outlined text-primary mb-1">compress</span>
          <span className="text-sm text-on-surface-variant">Pressure</span>
          <span className="text-xl font-bold">{pressure} hPa</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="material-symbols-outlined text-tertiary mb-1">wb_sunny</span>
          <span className="text-sm text-on-surface-variant">UV Index</span>
          <span className="text-xl font-bold">Low (2)</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="material-symbols-outlined text-secondary mb-1">air</span>
          <span className="text-sm text-on-surface-variant">Wind Speed</span>
          <span className="text-xl font-bold">{windSpeed} {windSymbol}</span>
        </div>
      </div>
    </section>
  );
}
