import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Materi from './pages/Materi'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="flex-1 flex flex-col">
          <Navbar onMenuClick={toggleSidebar} />
          <main className="flex-1 p-4 lg:p-8 lg:ml-64">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/materi" element={<Materi />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

