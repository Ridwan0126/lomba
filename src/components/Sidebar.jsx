import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutGrid, BookOpen, ClipboardList, Video, MessageSquare, Settings, LogOut } from 'lucide-react'

function Sidebar() {
  const location = useLocation()
  
  const menuItems = [
    { name: 'Dashboard', icon: LayoutGrid, path: '/' },
    { name: 'Materi', icon: BookOpen, path: '/materi' },
    { name: 'Tugas', icon: ClipboardList, path: '/tugas' },
    { name: 'Live Class', icon: Video, path: '/live-class' },
    { name: 'Forum', icon: MessageSquare, path: '/forum' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ]

  return (
    <div className="fixed left-0 h-screen w-60 bg-white p-4 shadow-sm">
      <div className="mb-8">
        <img src="/placeholder.svg?height=40&width=40" alt="EduGo Logo" className="h-10" />
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors
                ${location.pathname === item.path
                  ? 'bg-[#006D77] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
        
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-colors hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  )
}

export default Sidebar

