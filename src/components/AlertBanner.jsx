export default function AlertBanner() {
  return (
    <section className="relative w-full h-[320px] rounded-3xl overflow-hidden glass-card flex items-center px-10">
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-error/10 text-error rounded-full mb-5 animate-pulse-glow">
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            warning
          </span>
          <span className="text-sm font-bold">CRITICAL ALERT</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-5 leading-tight tracking-tight">
          Strong Wind Warning
        </h1>
        <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
          Gusts up to 95km/h expected in the Northern Metro area between 4:00 PM and 11:00 PM today. Secure outdoor furniture.
        </p>
        <button className="btn-primary py-3.5 px-7 text-sm shadow-lg">
          View Safety Guidelines
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
