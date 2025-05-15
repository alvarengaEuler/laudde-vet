"use client"

import type React from "react"

import { FileText, DollarSign, Users } from "lucide-react"
import StatsCard from "@/components/dashboard/stats-card"
import RevenueChart from "@/components/dashboard/revenue-chart"
import RecentPatients from "@/components/dashboard/recent-patients"
import { getMonthlyRevenueBySource, getRecentPatients } from "@/lib/mock-data"
import { useState } from "react"
import { Calendar, ArrowRight, BarChart2 } from "lucide-react"

// Substitua a função Dashboard pelo seguinte código
export default function Dashboard() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  })

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDateRange({
      ...dateRange,
      [name]: value,
    })
  }

  // Dados filtrados pela data
  const startDate = new Date(dateRange.startDate)
  const endDate = new Date(dateRange.endDate)

  // Mock data for payments and reports
  const payments = [
    { id: 1, date: "2024-01-15", amount: 150, status: "paid" },
    { id: 2, date: "2024-01-20", amount: 200, status: "pending" },
    { id: 3, date: "2024-02-01", amount: 100, status: "paid" },
    { id: 4, date: "2024-02-10", amount: 50, status: "pending" },
    { id: 5, date: "2024-03-01", amount: 250, status: "paid" },
  ]

  const reports = [
    { id: 1, createdAt: "2024-01-10" },
    { id: 2, createdAt: "2024-01-25" },
    { id: 3, createdAt: "2024-02-15" },
    { id: 4, createdAt: "2024-03-05" },
  ]

  // Filtra os pagamentos pelo intervalo de datas
  const filteredPayments = payments.filter((payment) => {
    const paymentDate = new Date(payment.date)
    return paymentDate >= startDate && paymentDate <= endDate
  })

  // Calcula o total recebido no período
  const totalReceived = filteredPayments
    .filter((payment) => payment.status === "paid")
    .reduce((sum, payment) => sum + payment.amount, 0)

  // Calcula o total a receber (pagamentos pendentes)
  const totalPending = payments
    .filter((payment) => payment.status === "pending")
    .reduce((sum, payment) => sum + payment.amount, 0)

  // Contagem de relatórios no período
  const reportsInPeriod = reports.filter((report) => {
    const reportDate = new Date(report.createdAt)
    return reportDate >= startDate && reportDate <= endDate
  }).length

  const revenueBySource = getMonthlyRevenueBySource()
  const recentPatients = getRecentPatients(5)

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Visão geral do seu sistema de laudos</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <input
              type="date"
              name="startDate"
              value={dateRange.startDate}
              onChange={handleDateChange}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            />
          </div>
          <div className="flex items-center">
            <ArrowRight size={18} className="text-gray-500 mx-1" />
            <input
              type="date"
              name="endDate"
              value={dateRange.endDate}
              onChange={handleDateChange}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatsCard
          title="Laudos Emitidos"
          value={reportsInPeriod}
          icon={<FileText size={20} />}
          description="No período selecionado"
          colorClass="text-blue-600 bg-blue-50"
        />
        <StatsCard
          title="Receita Total"
          value={`R$ ${totalReceived.toFixed(2)}`}
          icon={<DollarSign size={20} />}
          description="No período selecionado"
          colorClass="text-green-600 bg-green-50"
        />
        <StatsCard
          title="Valor a Receber"
          value={`R$ ${totalPending.toFixed(2)}`}
          icon={<BarChart2 size={20} />}
          description="Pagamentos pendentes"
          colorClass="text-yellow-600 bg-yellow-50"
        />
        <StatsCard
          title="Total de Pacientes"
          value={recentPatients.length}
          icon={<Users size={20} />}
          description="Atendidos recentemente"
          colorClass="text-purple-600 bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <RevenueChart clinicRevenue={revenueBySource.clinic} individualRevenue={revenueBySource.individual} />
        <RecentPatients patients={recentPatients} />
      </div>
    </div>
  )
}
