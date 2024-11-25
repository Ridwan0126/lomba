import React from 'react'
import { Coins, Book, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import StatCard from '../components/StatCard'
import CourseCard from '../components/CourseCard'
import Leaderboard from '../components/Leaderboard'
import StatsChart from '../components/StatsChart'

export default function Dashboard() {
  const courses = [
    {
      title: 'Prinsip Dan Elemen Desain (Garis, Warna, Bentuk, Tekstur, Dll.)',
      points: 100,
      teacher: 'Rendi Satria',
      teacherRole: 'Guru Desain Grafis',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'Pembelajaran Teknik Animasi Dua Dan Tiga Dimensi',
      points: 100,
      teacher: 'Fani Turaya',
      teacherRole: 'Guru Animasi',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'Dasar Perhitungan Dan Pemecahan Masalah Matematis',
      points: 100,
      teacher: 'Muhammad Nurdin',
      teacherRole: 'Guru Matematika',
      image: '/placeholder.svg?height=200&width=400',
    },
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-4 lg:gap-8">
      <div className="lg:col-span-3">
        {/* Hero Banner */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-[#006D77] p-4 text-white lg:mb-8 lg:p-8">
          <div className="relative z-10">
            <h2 className="mb-2 text-2xl font-semibold lg:text-3xl">
              Platform Belajar Digital
            </h2>
            <p className="mb-4 text-lg lg:text-xl">
              untuk Generasi Kreatif dan Kompeten
            </p>
            <p className="text-sm">SMKN 1 MENDO BARAT</p>
          </div>
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Students"
            className="absolute right-0 top-1/2 h-32 -translate-y-1/2 lg:h-48"
          />
        </div>

        {/* Stats */}
        <div className="mb-4 grid gap-4 sm:grid-cols-3 lg:mb-8">
          <StatCard
            icon={Coins}
            label="Total Point"
            value="2.000"
          />
          <StatCard
            icon={Book}
            label="Materi Selesai"
            value="5 Materi"
          />
          <StatCard
            icon={Clock}
            label="Waktu Belajar"
            value="72 Jam"
          />
        </div>

        {/* Courses */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Lanjut Belajar,</h2>
            <div className="flex gap-2">
              <button className="rounded-full border p-2">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="rounded-full border p-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-4 lg:space-y-8">
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center gap-4">
            <img
              src="/placeholder.svg?height=60&width=60"
              alt="Profile"
              className="h-16 w-16 rounded-full border-4 border-[#006D77]"
            />
            <div>
              <h2 className="text-xl font-semibold">
                Selamat Pagi Ahmad👋
              </h2>
              <p className="text-sm text-gray-600">
                "Lanjutkan Belajarmu Dan Capailah Targetmu"
              </p>
            </div>
          </div>
        </div>
        
        <StatsChart />
        
        <Leaderboard />
      </div>
    </div>
  )
}

