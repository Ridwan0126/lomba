export default function StatCard({ icon: Icon, label, value, color = 'bg-[#006D77]' }) {
  return (
    <div className={`${color} rounded-lg p-4 text-white`}>
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <div>
          <p className="text-sm opacity-90">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  )
}

