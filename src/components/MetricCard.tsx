interface MetricCardProps {
  value: string;
  label: string;
  source?: string;
}

export function MetricCard({
  value,
  label,
  source,
}: MetricCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-3xl font-semibold text-gray-900 mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-500 mb-3">{label}</div>
      {source && (
        <div className="text-xs text-gray-700 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
          {source}
        </div>
      )}
    </div>
  );
}