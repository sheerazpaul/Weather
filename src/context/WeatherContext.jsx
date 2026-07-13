import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
  getForecast,
  getForecastByCoords,
} from '../api/weather';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeather = useCallback(async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(cityName),
        getForecast(cityName),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchWeatherByLocation = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
        });
      });
      const { latitude, longitude } = position.coords;
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeatherByCoords(latitude, longitude),
        getForecastByCoords(latitude, longitude),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(weatherData.name);
    } catch (err) {
      setError('Location access denied. Please search for a city.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeatherByLocation();
  }, [fetchWeatherByLocation]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        forecast,
        loading,
        error,
        city,
        setCity,
        fetchWeather,
        fetchWeatherByLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) throw new Error('useWeather must be used within WeatherProvider');
  return context;
}
