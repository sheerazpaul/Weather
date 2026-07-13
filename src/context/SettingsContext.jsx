import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [tempUnit, setTempUnit] = useState('C');
  const [windUnit, setWindUnit] = useState('km/h');
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  const convertTemp = (tempC) => {
    if (tempUnit === 'F') return Math.round((tempC * 9) / 5 + 32);
    return Math.round(tempC);
  };

  const convertWind = (mps) => {
    if (windUnit === 'mph') return Math.round(mps * 2.237);
    if (windUnit === 'm/s') return Math.round(mps);
    return Math.round(mps * 3.6);
  };

  const tempSymbol = tempUnit === 'F' ? '°F' : '°C';
  const windSymbol = windUnit;

  return (
    <SettingsContext.Provider
      value={{
        tempUnit,
        setTempUnit,
        windUnit,
        setWindUnit,
        alertsEnabled,
        setAlertsEnabled,
        convertTemp,
        convertWind,
        tempSymbol,
        windSymbol,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
