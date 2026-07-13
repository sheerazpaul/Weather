const API_KEY = '2c5303b6cc077ca2ddd2adfcb6e70a0a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('City not found');
  return res.json();
}

export async function getCurrentWeatherByCoords(lat, lon) {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('Failed to fetch weather');
  return res.json();
}

export async function getForecast(city) {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('Forecast not available');
  return res.json();
}

export async function getForecastByCoords(lat, lon) {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('Forecast not available');
  return res.json();
}

export function getWeatherIconUrl(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

export function formatTime(unix, timezone) {
  const date = new Date((unix + timezone) * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  });
}

export function formatDate(unix, timezone) {
  const date = new Date((unix + timezone) * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    timeZone: 'UTC',
  });
}

export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  if (hour < 21) return 'Good Evening';
  return 'Good Night';
}

export function groupForecastByDay(forecast) {
  const days = {};
  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    if (!days[date]) {
      days[date] = {
        date,
        temps: [],
        weather: item.weather[0],
        items: [],
      };
    }
    days[date].temps.push(item.main.temp);
    days[date].items.push(item);
  });

  return Object.values(days).map((day) => ({
    ...day,
    tempMin: Math.round(Math.min(...day.temps)),
    tempMax: Math.round(Math.max(...day.temps)),
  }));
}
