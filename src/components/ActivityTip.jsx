export default function ActivityTip() {
  return (
    <div className="bg-primary-container text-on-primary-container rounded-3xl p-8 relative overflow-hidden shadow-[0_10px_30px_rgba(44,112,226,0.2)]">
      <div className="absolute -right-8 -top-8 opacity-20 transform rotate-12">
        <span className="material-symbols-outlined text-[160px]">directions_run</span>
      </div>
      <div className="relative z-10 space-y-4">
        <div className="bg-white/20 w-fit px-5 py-1.5 rounded-full text-sm font-semibold">
          Activity Alert
        </div>
        <h3 className="text-xl font-semibold">Perfect day for outdoor activity</h3>
        <p className="text-base opacity-90 leading-relaxed">
          The air quality is excellent and the temperature is comfortable. Light wind will keep you cool.
        </p>
        <button className="bg-white text-primary px-7 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-md">
          View Recommendations
        </button>
      </div>
    </div>
  );
}
