import { useSettings } from '../context/SettingsContext';

export default function QuickSettings() {
  const { tempUnit, setTempUnit, windUnit, setWindUnit } = useSettings();

  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-on-surface tracking-tight">Quick Settings</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="glass-card p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">thermostat</span>
            <span className="text-lg font-bold">Temperature Unit</span>
          </div>
          <div className="flex gap-4">
            {['°C', '°F'].map((u) => (
              <button
                key={u}
                onClick={() => setTempUnit(u)}
                className={`flex-1 py-3 rounded-full font-bold transition-all ${
                  tempUnit === u
                    ? 'bg-primary text-on-primary shadow-lg scale-105'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
        <div className="glass-card p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-tertiary">air</span>
            <span className="text-lg font-bold">Wind Speed</span>
          </div>
          <div className="flex gap-4">
            {['km/h', 'mph', 'm/s'].map((u) => (
              <button
                key={u}
                onClick={() => setWindUnit(u)}
                className={`flex-1 py-3 rounded-full font-bold transition-all ${
                  windUnit === u
                    ? 'bg-tertiary text-on-tertiary shadow-lg scale-105'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
