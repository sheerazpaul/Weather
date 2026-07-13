export default function WeatherNews() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold px-1 tracking-tight">Weather News</h3>
      <div className="glass-card overflow-hidden">
        <img
          className="w-full h-44 object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcipMTjx6W4Yxyjqlqyc_-xqPy8VkoHJzMp5l9RE3767VpF_gI_IuhVrFEVRJQ-KH7ycsZCPf3tcDIv0LBPJ15zE_KPk2j1Wv89wEe6zqMG1CA1dD9vvZYlkv97EtGPrJEMozSwC8Ox54y_BdhXrhAH6BTuSkWtqmFdlDrRU2XfVKZ2KxUbL15FgfOKcRa3zwkee5J-quHHH9lIf-ihyNFQzD8eHS0Tc486s429qOldQ4af_jpSwY"
          alt="Weather news"
        />
        <div className="p-7 space-y-3">
          <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium">
            <span>METEOROLOGY TODAY</span>
            <span>4h ago</span>
          </div>
          <h4 className="text-base font-bold leading-snug">
            Spring Equinox: What to expect this year
          </h4>
          <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
            Recent data suggests a milder transition into spring with higher than average precipitation...
          </p>
        </div>
      </div>
    </div>
  );
}
