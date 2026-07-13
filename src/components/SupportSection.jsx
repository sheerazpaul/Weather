export default function SupportSection() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-on-surface tracking-tight">Support & Community</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="glass-card p-8 space-y-5 text-center hover-lift">
          <div className="bg-primary-container w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-on-primary-container">bug_report</span>
          </div>
          <h3 className="text-xl font-bold">Report a Bug</h3>
          <p className="text-on-surface-variant leading-relaxed">Found something broken? Let us know and we'll fix it.</p>
          <button className="btn-primary py-2.5 px-6 text-sm">Report Issue</button>
        </div>
        <div className="glass-card p-8 space-y-5 text-center hover-lift">
          <div className="bg-tertiary-container w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-on-tertiater-container">lightbulb</span>
          </div>
          <h3 className="text-xl font-bold">Suggest Feature</h3>
          <p className="text-on-surface-variant leading-relaxed">Have an idea? We'd love to hear how to make Aether better.</p>
          <button className="btn-ghost py-2.5 px-6 text-sm text-tertiary">Send Feedback</button>
        </div>
        <div className="glass-card p-8 space-y-5 text-center hover-lift">
          <div className="bg-secondary-container w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-on-secondary-container">code</span>
          </div>
          <h3 className="text-xl font-bold">Open Source</h3>
          <p className="text-on-surface-variant leading-relaxed">Aether is built on open source tech. Join the community.</p>
          <button className="btn-ghost py-2.5 px-6 text-sm text-secondary">GitHub</button>
        </div>
      </div>
    </section>
  );
}
