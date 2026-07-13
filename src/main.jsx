import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext';
import { SettingsProvider } from './context/SettingsContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SettingsProvider>
          <WeatherProvider>
            <App />
          </WeatherProvider>
        </SettingsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
