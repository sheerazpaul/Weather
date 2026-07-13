import BrandStory from '../components/BrandStory';
import QuickSettings from '../components/QuickSettings';
import TeamGrid from '../components/TeamGrid';
import SupportSection from '../components/SupportSection';
import FaqAccordion from '../components/FaqAccordion';

export default function AboutPage() {
  return (
    <>
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">About & Settings</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Manage your precision weather experience and learn about the science behind our forecasts.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <BrandStory />
        <QuickSettings />
        <TeamGrid />
        <SupportSection />
        <FaqAccordion />
      </div>
    </>
  );
}
