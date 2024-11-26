"use client"
import React, { useState } from "react";
import { Search, Bell, ChevronDown, Bookmark, Download, Share2, MoreHorizontal, Play, Lock } from 'lucide-react'

export default function DetailMateri() {
  return (
    <div className="flex min-h-screen bg-white">
     {/* Main Content */}
        <div className="flex">
          <div className="flex-1 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Desain Grafis</h2>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">👥</span>
                  25 Siswa
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Banner */}
            <div className="relative rounded-lg overflow-hidden mb-8 bg-[#FFA62B] aspect-video">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold mb-4">LEARN</h1>
                <h1 className="text-6xl font-bold">GRAPHIC</h1>
                <h1 className="text-6xl font-bold">DESIGN</h1>
                <img 
                  src="/placeholder.svg" 
                  alt="Phone mockup" 
                  className="absolute bottom-0 w-1/2 max-w-md"
                />
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-[#006D77] inline-block">Tentang</h3>
              <div className="text-gray-600 space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt quisque massa nulla sodales orci. Risus mauris fringilla integer vivamus condimentum adipiscing tellus non. Euismod lacus et scelerisque at amet.
                </p>
                <p>
                  Turpis amet erat a orci. Sit sed mauris velit etiam dui elementum sagittis proin magna. Justo gravida ultrices vitae non et interdum. Condimentum dictum in consectetur ultrices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 border-l p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Progres</h3>
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span>Desain Grafis</span>
                  <span>1/7</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#006D77] h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Video Materi</h3>
                <span className="text-sm text-gray-500">(1/7)</span>
              </div>
              <div className="space-y-3">
                <div className="bg-[#006D77] text-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Play className="w-5 h-5 mr-3" />
                    <span>Pengertian Desain Grafis</span>
                  </div>
                  <span className="text-sm">30 menit</span>
                </div>
                {['Prinsip-Prinsip Desain', 'Teknik Dasar Desain', 'Teori Warna', 'Tipografi', 'Layout', 'Pengantar Photoshop'].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Lock className="w-5 h-5 mr-3 text-gray-500" />
                      <span>{item}</span>
                    </div>
                    <span className="text-sm text-gray-500">30 menit</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

