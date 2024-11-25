import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
import { Chart } from './ui/Chart'

const data = [
  { month: "Jan", study: 35, test: 25 },
  { month: "Feb", study: 20, test: 15 },
  { month: "Mar", study: 52, test: 25 },
  { month: "Apr", study: 25, test: 30 },
  { month: "May", study: 15, test: 10 },
]

export default function StatsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistik Belajar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#006D77]" />
            <span className="text-sm text-gray-600">Study</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-200" />
            <span className="text-sm text-gray-600">Online Test</span>
          </div>
        </div>
        <Chart data={data} />
      </CardContent>
    </Card>
  )
}

