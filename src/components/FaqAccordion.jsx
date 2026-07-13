import { useState } from 'react';

const FAQ = [
  {
    q: 'How accurate is the forecast data?',
    a: 'Aether Weather uses a blend of multiple global weather models and machine learning algorithms to provide highly accurate forecasts. Our data is sourced from NOAA, ECMWF, and other leading meteorological organizations.',
  },
  {
    q: 'Can I use Aether Weather offline?',
    a: 'Currently, Aether Weather requires an internet connection to fetch real-time weather data and updates. We are exploring offline capabilities for future releases.',
  },
  {
    q: 'How do I change my location settings?',
    a: 'You can change your default location in the Settings tab, or use the search bar to instantly view weather for any city in the world.',
  },
  {
    q: 'What makes Aether Weather different?',
    a: 'Unlike most weather apps, Aether focuses purely on the forecast and essential data. No ads, no bloat, just beautiful meteorological information designed to help you plan your day.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-on-surface tracking-tight">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQ.map((item, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full p-7 flex justify-between items-center text-left group"
            >
              <span className="text-lg font-bold group-hover:text-primary transition-colors">{item.q}</span>
              <span
                className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-7 pb-7 text-on-surface-variant leading-relaxed border-t border-outline-variant/30 pt-5">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
