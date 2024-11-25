import { Star } from 'lucide-react'

export default function Leaderboard() {
  const leaders = [
    { name: 'Ahmad Suharjo', class: 'Kelas XII DKV A', points: 5000 },
    { name: 'Riski Saputra', class: 'Kelas XII DKV A', points: 4300 },
    { name: 'Kelvin Andreas', class: 'Kelas XII DKV B', points: 3200 },
    { name: 'Leni Sumarni', class: 'Kelas XII DKV A', points: 2000 },
  ]

  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="mb-4 text-lg font-semibold">Leaderboard</h3>
      <div className="space-y-4">
        {leaders.map((leader, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt={leader.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium">{leader.name}</p>
              <p className="text-sm text-gray-600">{leader.class}</p>
            </div>
            <span className="flex items-center gap-1 font-medium text-yellow-500">
              <Star className="h-4 w-4 fill-yellow-500" />
              {leader.points}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full rounded-lg bg-violet-100 py-2 text-center text-violet-700">
        See All
      </button>
    </div>
  )
}

