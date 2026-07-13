import { useWeather } from '../context/WeatherContext';
import { useSettings } from '../context/SettingsContext';

const FAVORITES = [
  { name: 'Reykjavik', country: 'Iceland', icon: 'cloudy_snowing', iconColor: 'text-primary', temp: 2, feels: -4, tags: ['SNOWING', 'WIND: 22KM/H'] },
  { name: 'Dubai', country: 'UAE', icon: 'sunny', iconColor: 'text-tertiary', temp: 41, feels: 45, tags: ['HEATWAVE', 'UV: 11+'] },
  { name: 'London', country: 'UK', icon: 'rainy', iconColor: 'text-secondary', temp: 14, feels: 12, tags: ['LIGHT RAIN', 'HUM: 88%'] },
];

export default function FavoriteLocations() {
  const { fetchWeather } = useWeather();
  const { convertTemp } = useSettings();

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-on-surface tracking-tight">Favorite Locations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FAVORITES.map((city) => (
          <button
            key={city.name}
            onClick={() => fetchWeather(city.name)}
            className="glass-card p-7 relative overflow-hidden group text-left hover-lift"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-125" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-xl font-semibold">{city.name}</h3>
                  <p className="text-on-surface-variant text-sm mt-0.5">{city.country}</p>
                </div>
                <span
                  className={`material-symbols-outlined text-[32px] ${city.iconColor}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {city.icon}
                </span>
              </div>
              <div className="flex items-end gap-2.5">
                <span className="text-4xl font-bold text-on-surface">{convertTemp(city.temp)}&deg;</span>
                <span className="text-on-surface-variant text-sm mb-1.5">
                  Feels like {convertTemp(city.feels)}&deg;
                </span>
              </div>
              <div className="mt-4 flex gap-1.5 flex-wrap">
                {city.tags.map((tag) => (
                  <span key={tag} className="chip chip-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
        <button className="glass-card p-7 border-dashed border-2 border-outline-variant hover:border-primary flex flex-col items-center justify-center gap-4 group min-h-[200px]">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
            <span className="material-symbols-outlined text-[32px]">add</span>
          </div>
          <span className="text-sm text-on-surface-variant font-medium">Add New Location</span>
        </button>
      </div>
    </section>
  );
}
