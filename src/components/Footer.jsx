import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-dim rounded-t-[32px] mt-10 transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-12 py-10 max-w-[1440px] mx-auto w-full">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="text-2xl font-bold text-on-surface tracking-tight">AetherWeather</div>
          <p className="text-base text-on-surface-variant mt-2">
            &copy; {new Date().getFullYear()} AetherWeather. Precision in every breeze.
          </p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-base text-on-surface-variant hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="#" className="text-base text-on-surface-variant hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="text-base text-on-surface-variant hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
