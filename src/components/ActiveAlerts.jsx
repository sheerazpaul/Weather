const ALERTS = [
  {
    id: 1,
    icon: 'air',
    color: 'text-error',
    borderColor: 'border-error',
    time: '10 MIN AGO',
    title: 'High Wind Gusts',
    description: 'Extreme winds detected in the valley. Damage to structures possible.',
  },
  {
    id: 2,
    icon: 'water_drop',
    color: 'text-tertiary',
    borderColor: 'border-tertiary',
    time: '1 HOUR AGO',
    title: 'Minor Flood Watch',
    description: 'River levels rising in lower basin due to recent heavy rainfall.',
  },
  {
    id: 3,
    icon: 'visibility',
    color: 'text-secondary',
    borderColor: 'border-secondary-container',
    time: '3 HOURS AGO',
    title: 'Dense Fog Advisory',
    description: 'Reduced visibility on coastal highways until sunrise tomorrow.',
  },
];

export default function ActiveAlerts() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-on-surface tracking-tight">Active Alerts</h2>
        <span className="text-on-surface-variant text-sm font-medium">{ALERTS.length} Active</span>
      </div>
      {ALERTS.map((alert) => (
        <div
          key={alert.id}
          className={`glass-card p-7 border-l-4 ${alert.borderColor}`}
        >
          <div className="flex justify-between items-start mb-3">
            <span
              className={`material-symbols-outlined ${alert.color}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {alert.icon}
            </span>
            <span className="text-on-surface-variant text-xs font-medium">{alert.time}</span>
          </div>
          <h3 className="text-lg font-bold mb-2">{alert.title}</h3>
          <p className="text-base text-on-surface-variant line-clamp-2 leading-relaxed">{alert.description}</p>
        </div>
      ))}
    </div>
  );
}
