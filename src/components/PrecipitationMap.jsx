export default function PrecipitationMap() {
  return (
    <div className="md:col-span-6 glass-card overflow-hidden flex flex-col hover-lift h-full min-h-[420px]">
      <div className="p-8 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Precipitation Map</h3>
          <p className="text-sm opacity-60 mt-1">Real-time weather radar</p>
        </div>
        <button className="p-3 rounded-2xl glass-dark">
          <span className="material-symbols-outlined">layers</span>
        </button>
      </div>
      <div className="flex-grow relative bg-surface-container dark:bg-inverse-surface overflow-hidden rounded-b-[24px]">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNkvSHo3U641ex1DwhrPxYD2D_VNih5S7wPdpxV7-7eUnpVZxMF5ZGhzsG_jmWP_-wew4kHeZqMr0glvlUVgdlIMh9JCrG0MwAIWpC47PvGYi30KyS0Ph2rG8zyvZs7LPGaz3ou9crzq_RXYaw2DEJfFX7t-by4kM7A1ZbLBcmAbWrbMtWA5EFB_9_xw-fXrvjCaqE-v2i_CgGUI1MefFoAwvLqYhs46zSp64qQpJexaUiwgktXmw"
          alt="Precipitation map"
        />
        <div className="absolute bottom-6 left-6 glass px-4 py-3 rounded-2xl flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-bold">Light</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-xs font-bold">Mod</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs font-bold">Heavy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
