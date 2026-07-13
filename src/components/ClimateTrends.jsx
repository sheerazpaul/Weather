import { useState } from 'react';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const TEMP_DATA = [40, 45, 55, 70, 85, 95, 80, 65, 50, 35, 30, 25];
const AQI_DATA = [30, 35, 40, 50, 55, 60, 72, 68, 55, 45, 38, 32];
const PRECIP_DATA = [20, 25, 35, 45, 50, 40, 30, 25, 35, 50, 45, 30];

export default function ClimateTrends() {
  const [activeTab, setActiveTab] = useState('Temp');

  const tabs = ['Temp', 'AQI', 'Precip'];
  const dataMap = { Temp: TEMP_DATA, AQI: AQI_DATA, Precip: PRECIP_DATA };
  const data = dataMap[activeTab];
  const maxVal = Math.max(...data);
  const currentMonth = new Date().getMonth();

  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold text-on-surface tracking-tight">Climate Trends</h2>
          <p className="text-sm text-on-surface-variant mt-1">Last 12 Months Comparison</p>
        </div>
        <div className="flex bg-surface-container-high rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-white dark:bg-surface shadow-sm text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow min-h-[300px] flex items-end gap-3 pb-2 relative">
        <div className="absolute inset-0 flex flex-col justify-between py-2 text-[10px] text-on-surface-variant border-l border-b border-outline-variant/30">
          {activeTab === 'Temp' && (
            <>
              <span>40&deg;C</span>
              <span>30&deg;C</span>
              <span>20&deg;C</span>
              <span>10&deg;C</span>
              <span>0&deg;C</span>
            </>
          )}
          {activeTab === 'AQI' && (
            <>
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </>
          )}
          {activeTab === 'Precip' && (
            <>
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </>
          )}
        </div>
        <div className="flex-grow flex items-end justify-around pl-8 h-full">
          {data.map((val, i) => {
            const height = `${(val / maxVal) * 100}%`;
            const isNow = i === currentMonth;
            return (
              <div
                key={i}
                className={`w-8 rounded-t-lg transition-all cursor-pointer relative group ${
                  isNow ? 'bg-primary-container' : 'bg-primary/20 hover:bg-primary/40'
                }`}
                style={{ height }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                  {activeTab === 'Temp' && `${val}°`}
                  {activeTab === 'AQI' && val}
                  {activeTab === 'Precip' && `${val}%`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-around pl-8 pt-4 text-xs text-on-surface-variant font-medium">
        {MONTHS.map((m, i) => (
          <span key={m} className={i === currentMonth ? 'text-primary font-bold' : ''}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
