'use client'

import { format } from 'date-fns'
import Image from 'next/image'

export default function ReportDetails({ report }: { report: any }) {
  return (
    <div
      className="mx-auto my-10 bg-white p-10 shadow print:m-0 print:p-0 print:shadow-none"
      style={{
        width: '21cm',
        minHeight: '29.7cm',
        fontFamily: 'serif',
        boxSizing: 'border-box',
      }}
    >
      {/* Cabeçalho */}
      <div className="mb-6 grid grid-cols-3 border-b pb-4">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <Image
            src="/logo-vet.png" // Substitua pelo caminho real
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Título */}
        <div className="text-center">
          <h1 className="text-2xl font-bold uppercase">Laudo Veterinário</h1>
          <p className="mt-1 text-sm">
            Emitido em: {format(new Date(report.createdAt), 'dd/MM/yyyy')}
          </p>
        </div>

        {/* Vet info */}
        <div className="text-right text-sm">
          <p>
            <strong>Veterinário Responsável:</strong>
          </p>
          <p>{report.veterinarians[0]?.name || 'Não informado'}</p>
          <p>CRMV: {report.veterinarians[0]?.crmv || '0000'}</p>
          <p>Email: {report.user?.email || 'n/d'}</p>
        </div>
      </div>

      {/* Dados do Paciente */}
      <div className="mb-6">
        <h2 className="mb-2 border-b text-lg font-semibold">Dados do Paciente</h2>
        <p>
          <strong>Nome:</strong> {report.patient?.name || '-'}
        </p>
        <p>
          <strong>Espécie:</strong> {report.patient?.species || '-'}
        </p>
      </div>

      {/* Diagnóstico */}
      <div className="mb-6">
        <h2 className="mb-2 border-b text-lg font-semibold">Informações do Laudo</h2>
        {report.fields && (
          <ul className="list-disc pl-6 text-sm">
            {Object.entries(report.fields).map(([key, value]) => (
              <li key={key}>
                <strong className="capitalize">{key}:</strong> {value as string}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Serviços realizados */}
      {report.services?.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-2 border-b text-lg font-semibold">Serviços Realizados</h2>
          <ul className="list-disc pl-6 text-sm">
            {report.services.map((srv: any) => (
              <li key={srv.id}>{srv.description}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Assinatura */}
      <div className="mt-20 text-center">
        <Image
          src="/assinatura-vet.png" // Substitua pelo caminho real
          alt="Assinatura"
          width={150}
          height={80}
          className="mx-auto mb-2"
        />
        <p className="text-sm font-medium">{report.veterinarians[0]?.name}</p>
        <p className="text-xs text-gray-600">CRMV: {report.veterinarians[0]?.crmv || '0000'}</p>
      </div>
    </div>
  )
}
