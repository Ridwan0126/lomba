import { Star } from 'lucide-react'

export default function CourseCardDashboard({ title, points, teacher, teacherRole, image, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-lg border bg-white ${className}`}>
      <div className="relative">
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <div className="absolute top-2 left-2 rounded bg-[#006D77]/10 px-2 py-1 text-xs font-medium text-[#006D77]">
          XII DKV
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-sm text-yellow-700">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            {points}
          </span>
        </div>
        <h3 className="mb-4 line-clamp-2 text-base font-semibold">{title}</h3>
        <div className="flex items-center gap-3">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt={teacher}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{teacher}</p>
            <p className="text-xs text-gray-600">{teacherRole}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

