import React from 'react'

function FilterTabs({ active, onChange }) {
  const tabs = ['Semua', 'Belum Dimulai', 'Dalam Proses', 'Selesai']
  
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`rounded-full px-4 py-2 text-sm transition-colors
            ${active === tab 
              ? 'bg-[#006D77] text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs

