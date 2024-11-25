import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

export function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickMargin={8}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickMargin={8}
          tickFormatter={(value) => `${value}Hr`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-white p-2 shadow-md">
                  <p className="text-sm font-semibold">{payload[0].payload.month}</p>
                  <p className="text-sm text-gray-600">
                    Study: {payload[0].value}Hr
                  </p>
                  <p className="text-sm text-gray-600">
                    Test: {payload[1].value}Hr
                  </p>
                </div>
              )
            }
            return null
          }}
        />
        <Bar
          dataKey="test"
          stackId="a"
          fill="#E5E7EB"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="study"
          stackId="a"
          fill="#006D77"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

