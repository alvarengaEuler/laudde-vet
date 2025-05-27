'use client'

import React, { useRef } from 'react'

type Campo = {
  name: string
  description: string
}

type Props = {
  titulo: string
  dados: Record<string, Campo>
}

export default function HtmlPdfPreview({ titulo, dados }: Props) {
  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (!printRef.current) return
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Laudo ${titulo}</title>
            <style>
              body {
                font-family: 'Times New Roman', serif;
                padding: 40px;
                color: #000;
              }
              .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
              }
              .logo-placeholder {
                width: 100px;
                height: 60px;
                background-color: #ccc;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
              }
              .title {
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                text-transform: uppercase;
                margin: 30px 0;
              }
              .section {
                margin-top: 24px;
              }
              .section h3 {
                font-size: 16px;
                font-weight: bold;
                text-transform: uppercase;
                margin-bottom: 8px;
              }
              .campo {
                margin-bottom: 10px;
                font-size: 14px;
              }
              .campo strong {
                font-weight: bold;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 16px;
              }
              th, td {
                border: 1px solid #000;
                padding: 6px;
                font-size: 13px;
                text-align: center;
              }
              .assinatura {
                margin-top: 60px;
                text-align: center;
              }
              .footer {
                font-size: 10px;
                margin-top: 40px;
                text-align: center;
                color: #444;
              }
              @media print {
                .print-hide {
                  display: none;
                }
              }
            </style>
          </head>
          <body>${printRef.current.innerHTML}</body>
        </html>
      `)
      printWindow.document.close()
      printWindow.focus()
      printWindow.print()
      printWindow.close()
    }
  }

  return (
    <div>
      <div className="print-hide mb-4 text-right">
        <button
          onClick={handlePrint}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Imprimir
        </button>
      </div>

      <div ref={printRef} className="mx-auto max-w-4xl bg-white px-10 py-6 text-sm text-black">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-16 w-32 items-center justify-center bg-gray-300 text-xs font-semibold uppercase">
            Logo
          </div>
          <div className="space-y-1 text-right text-xs leading-tight">
            <p>
              <strong>Data:</strong> 00/00/2024
            </p>
            <p>
              <strong>Veterinário:</strong> Dr. Francisco Xavier
            </p>
            <p>
              <strong>Clínica:</strong> Edpet
            </p>
            <p>
              <strong>Suspeita Clínica:</strong> __________
            </p>
            <p>
              <strong>Técnica:</strong> Transcorneana
            </p>
          </div>
        </div>

        {/* Paciente Info */}
        <div className="grid grid-cols-2 border border-black">
          <div className="space-y-1 border-r border-black p-2 text-xs">
            <p>
              <strong>Paciente:</strong> ___________
            </p>
            <p>
              <strong>Espécie:</strong> ___________
            </p>
            <p>
              <strong>Raça:</strong> ___________
            </p>
            <p>
              <strong>Idade:</strong> ___________
            </p>
            <p>
              <strong>Sexo:</strong> ___________
            </p>
            <p>
              <strong>Tutor:</strong> ___________
            </p>
          </div>
          <div className="space-y-1 p-2 text-xs">
            <p>
              <strong>Data:</strong> 00/00/2024
            </p>
            <p>
              <strong>Veterinário:</strong> Dr. Francisco Xavier
            </p>
            <p>
              <strong>Clínica:</strong> Edpet
            </p>
            <p>
              <strong>Suspeita:</strong> Clínica
            </p>
            <p>
              <strong>Técnica:</strong> Transcorneana
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-4 mt-8 text-center text-base font-bold uppercase">
          Exame Ultrassonográfico Ocular
        </div>

        {/* Descrição */}
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-bold uppercase">Descrição ultrassonográfica</h3>
          <div className="space-y-2">
            {Object.values(dados).map((campo, idx) => (
              <p key={idx}>
                <strong>{campo.name}:</strong> {campo.description}
              </p>
            ))}
          </div>
        </div>

        {/* Medições */}
        <div className="mt-8">
          <h3 className="mb-2 text-sm font-bold uppercase">Medições</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Olho Direito</th>
                <th>Olho Esquerdo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Câmara anterior</td>
                <td>0,38 cm</td>
                <td>0,16 cm</td>
              </tr>
              <tr>
                <td>Cristalino</td>
                <td>0,71 cm</td>
                <td>0,72 cm</td>
              </tr>
              <tr>
                <td>Câmara vítrea</td>
                <td>0,89 cm</td>
                <td>0,89 cm</td>
              </tr>
              <tr>
                <td>Globo ocular (DAP)</td>
                <td>2,0 cm</td>
                <td>1,85 cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Impressão Diagnóstica */}
        <div className="mt-8">
          <h3 className="mb-2 text-sm font-bold uppercase">Impressão Diagnóstica</h3>
          <p>
            Achados ultrassonográficos de catarata bilateral. Celularidade em câmara vítrea esquerda
            pode estar relacionada a processo degenerativo ou inflamatório/infeccioso.
          </p>
        </div>

        {/* Assinatura */}
        <div className="mt-12 text-center">
          <p>Ingrid Felix F. Silva</p>
          <p>Médica Veterinária</p>
          <p>CRMV/PB 2404</p>
        </div>

        {/* Rodapé */}
        <div className="mt-10 text-center text-xs text-gray-600">
          <p>
            O exame ultrassonográfico é de natureza complementar ao diagnóstico, devendo haver
            correlação com achados clínicos, laboratoriais e de outros exames complementares.
          </p>
          <p className="mt-2">veturexames@gmail.com • @veturimagem • (83) 9 8691-6277</p>
        </div>
      </div>
    </div>
  )
}
