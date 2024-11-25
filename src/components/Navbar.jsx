import { Search, Bell } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <h1 className="text-2xl font-semibold text-[#006D77]">Dashboard</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search your course here...."
            className="w-96 rounded-full border-none bg-gray-100 py-2 pl-10 pr-4 focus:ring-2 focus:ring-[#006D77]"
          />
        </div>
        
        <button className="relative rounded-full bg-gray-100 p-2">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            2
          </span>
        </button>
        
        <img
          src="/placeholder.svg?height=40&width=40"
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </header>
  )
}

