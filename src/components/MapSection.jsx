export default function MapSection() {
  return (
    <div className="glass-card overflow-hidden relative h-[500px]">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjeAHnSw58TMdaQ-FRJ_RSnbXmp53YhHZwR73wcgHErVSagqxblCWrl9Uq8nJnhlhFkWukOBZjXVJNanKouRiBh_howExwZb-5FkKAxHl-wNoSqtKwkgXyYqaoRgdhsoxesWF_TLyv8-QtTvUmS1F4g9-DYm2tVa3BivUB0jDW0XomjJu6h-C8yJ0pmNwYBgHaMw3P2C49wjLh0ON3yjdgfyoWs4-EP9gTFB1bSC8LPvByG_r2QqI"
          alt="Weather map"
        />
      </div>
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-3">
        <button className="glass-card p-3 rounded-2xl flex items-center justify-center bg-white/80 dark:bg-inverse-surface/80">
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="glass-card p-3 rounded-2xl flex items-center justify-center bg-white/80 dark:bg-inverse-surface/80">
          <span className="material-symbols-outlined">remove</span>
        </button>
        <button className="glass-card p-3 rounded-2xl flex items-center justify-center bg-white/80 dark:bg-inverse-surface/80">
          <span className="material-symbols-outlined">my_location</span>
        </button>
      </div>
      <div className="absolute bottom-6 right-6 left-6 md:left-auto z-10">
        <div className="glass-card p-5 rounded-3xl flex flex-wrap gap-3 justify-center items-center">
          <button className="btn-primary py-2 px-5 text-sm">
            <span className="material-symbols-outlined text-[18px]">rainy</span> Precipitation
          </button>
          <button className="btn-ghost py-2 px-5 text-sm">
            <span className="material-symbols-outlined text-[18px]">air</span> Wind
          </button>
          <button className="btn-ghost py-2 px-5 text-sm">
            <span className="material-symbols-outlined text-[18px]">thermostat</span> Temp
          </button>
        </div>
      </div>
    </div>
  );
}
