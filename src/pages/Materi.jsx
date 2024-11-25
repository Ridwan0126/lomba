import React from 'react'
import CourseCard from '../components/CourseCard'
import FilterTabs from '../components/FilterTabs'

function Materi() {
  const [activeTab, setActiveTab] = React.useState('Semua')
  
  const recentCourses = [
    {
      subject: 'Desain Grafis',
      title: 'Eksplorasi Teori dan Psikologi Warna Dalam Desain Grafis',
      progress: 80,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Matematika',
      title: 'Sistem Persamaan Linear D Variabel (SPLDV)',
      progress: 60,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
  ]
  
  const allCourses = [
    {
      subject: 'Desain Grafis',
      title: 'Dasar-dasar desain visual dan penggunaan software desain',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Matematika',
      title: 'Dasar perhitungan dan pemecahan masalah matematis',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Audio Video',
      title: 'Mempelajari teknik pengolahan audio dan video',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Fotografi',
      title: 'Teknik komposisi, pencahayaan, dan penggunaan kamera',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'B.Inggris',
      title: 'Pembelajaran kemampuan berbahasa Inggris',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'B.Indonesia',
      title: 'Pembelajaran bahasa Indonesia yang baik dan benar',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Pengembangan Game',
      title: 'Mempelajari proses pembuatan game',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Animasi 2D & 3D',
      title: 'Pembelajaran teknik animasi dua dan tiga dimensi',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      subject: 'Penjas',
      title: 'Pembelajaran tentang aktivitas fisik dan olahraga',
      progress: 50,
      points: 100,
      image: '/placeholder.svg?height=200&width=400',
    },
  ]

  return (
    <>
      {/* Recent Activities */}
      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Aktivitas Terbaru</h2>
          <button className="text-sm text-[#006D77]">View All</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {recentCourses.map((course, i) => (
            <CourseCard key={i} {...course} isLarge />
          ))}
        </div>
      </section>

      {/* All Courses */}
      <section>
        <FilterTabs active={activeTab} onChange={setActiveTab} />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allCourses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Materi

