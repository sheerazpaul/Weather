import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const { fetchWeather, fetchWeatherByLocation } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput('');
    }
  };

  return (
    <div className="relative w-full max-w-2xl mb-10 group">
      <form onSubmit={handleSubmit}>
        <div className="absolute inset-y-0 flex items-center pointer-events-none left-5">
          <span className="text-white material-symbols-outlined">search</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a city..."
          className="w-full py-4 pl-[56px] pr-[150px] rounded-full glass border-none focus:ring-[3px] focus:ring-primary/20 focus:scale-[1.02] transition-all duration-300 text-lg outline-none font-medium placeholder:text-on-surface-variant/50"
        />
        <button
          type="button"
          onClick={fetchWeatherByLocation}
          className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2.5 px-5 text-sm"
        >
          <span className="material-symbols-outlined text-[20px]">near_me</span>
          Current
        </button>
      </form>
    </div>
  );
}
