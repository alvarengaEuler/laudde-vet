"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface RevenueChartProps {
  clinicRevenue: number
  individualRevenue: number
}

const RevenueChart = ({ clinicRevenue, individualRevenue }: RevenueChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destruir o gráfico anterior se existir
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Clínicas", "Clientes Avulsos"],
        datasets: [
          {
            label: "Receita (R$)",
            data: [clinicRevenue, individualRevenue],
            backgroundColor: ["#3b82f6", "#60a5fa"],
            borderColor: ["#2563eb", "#3b82f6"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `R$ ${context.raw}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `R$ ${value}`,
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [clinicRevenue, individualRevenue])

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 h-64 sm:h-80">
      <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">Receita do Mês</h3>
      <div className="h-[calc(100%-2rem)]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}

export default RevenueChart
