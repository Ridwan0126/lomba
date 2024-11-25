import React from 'react'
import { BookOpen, Star } from 'lucide-react'

function CourseCard({ 
  title, 
  subject, 
  points, 
  progress, 
  image, 
  isLarge = false 
}) {
  return (
    <div className={`overflow-hidden rounded-lg border bg-white ${isLarge ? 'flex gap-4' : ''}`}>
      <div className={`relative ${isLarge ? 'w-48' : 'w-full'}`}>
        <img 
          src={image} 
          alt={subject} 
          className="h-48 w-full object-cover" 
        />
        <div className="absolute top-2 left-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
          12 Bab
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#006D77]" />
            <span className="font-medium">{subject}</span>
          </div>
          <div className="ml-auto flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-sm text-yellow-700">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{points}</span>
          </div>
        </div>
        <h3 className="mb-4 text-lg font-medium">{title}</h3>
        <div className="mt-auto">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span>Progress: {progress}%</span>
            {isLarge && <button className="rounded-lg bg-[#006D77] px-4 py-1 text-white">Lanjut</button>}
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div 
              className="h-full bg-[#006D77]" 
              style={{ width: `${progress}%` }}
            />
          </div>
          {!isLarge && (
            <button className="mt-4 w-full rounded-lg bg-[#006D77] px-4 py-2 text-white">
              Mulai
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseCard

