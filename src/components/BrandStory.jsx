export default function BrandStory() {
  return (
    <section className="glass-card p-10 overflow-hidden relative">
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-primary mb-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <span className="font-semibold tracking-wide">WHY WE BUILT THIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Aether <span className="text-primary">Weather</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Born from a frustration with cluttered, ad-heavy weather apps, Aether Weather is designed to deliver exactly what you need—beautifully.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            We believe checking the weather should be a moment of clarity in your day, not a visual assault of flashing banners and irrelevant data.
          </p>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2940&auto=format&fit=crop"
            alt="Aether Weather Brand"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent flex items-end p-8">
            <div className="text-on-surface space-y-1">
              <span className="text-sm font-bold tracking-widest uppercase">Since 2025</span>
              <p className="text-on-surface-variant text-sm">Precision forecast data. Elegantly delivered.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
