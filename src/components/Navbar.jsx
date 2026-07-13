import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/forecast', label: 'Forecast' },
    { to: '/alerts', label: 'Alerts' },

  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center px-5 md:px-12 py-5 max-w-[1440px] mx-auto">
        <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
          AetherWeather
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive(link.to)
                  ? 'text-primary dark:text-primary-fixed-dim nav-link-active'
                  : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-surface-container-high/50 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">
              {dark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-full hover:bg-surface-container-high/50 transition-colors"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-5 pb-5 space-y-1 glass border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 px-5 rounded-2xl text-sm font-medium transition-all ${
                isActive(link.to)
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-high/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
