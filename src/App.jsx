import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ForecastPage from './pages/ForecastPage';
import AlertsPage from './pages/AlertsPage';


export default function App() {
  return (
    <div className="min-h-screen flex flex-col weather-mesh">
      <Navbar />
      <main className="flex-1 pt-28 pb-12 px-5 md:px-12 max-w-[1440px] mx-auto w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/alerts" element={<AlertsPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
