'use client'

import React from 'react'

interface ReportHeaderProps {
  paciente: string
  data: string
  especie: string
  veterinario: string
  raca: string
  clinica: string
  idade: number | string
  suspeitaClinica: string
  sexo: 'Fêmea' | 'Macho' | string
  tecnica: string
  tutor: string
}

export function ReportHeader({
  paciente,
  data,
  especie,
  veterinario,
  raca,
  clinica,
  idade,
  suspeitaClinica,
  sexo,
  tecnica,
  tutor,
}: ReportHeaderProps) {
  return (
    <div className="mb-8 rounded border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">📋 Informações do Paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm text-gray-700">
        <div>
          <span className="font-medium">Paciente:</span> {paciente}
        </div>
        <div>
          <span className="font-medium">Tutor:</span> {tutor}
        </div>
        <div>
          <span className="font-medium">Data:</span> {data}
        </div>
        <div>
          <span className="font-medium">Espécie:</span> {especie}
        </div>
        <div>
          <span className="font-medium">Raça:</span> {raca}
        </div>
        <div>
          <span className="font-medium">Sexo:</span> {sexo}
        </div>
        <div>
          <span className="font-medium">Idade:</span> {idade} anos
        </div>
        <div>
          <span className="font-medium">Clínica:</span> {clinica}
        </div>
        <div>
          <span className="font-medium">Veterinário:</span> {veterinario}
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <span className="font-medium">Suspeita Clínica:</span> {suspeitaClinica}
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <span className="font-medium">Técnica:</span> {tecnica}
        </div>
      </div>
    </div>
  )
}
