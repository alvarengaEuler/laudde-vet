'use client'

import { useState } from 'react'

// import PDFViewer from '@/components/pdf/pdfViewer'
import HtmlPdfPreview from '@/components/pdf/HtmlPdfPreview'

const modelosPredefinidos: Record<string, { name: string; description: string }[]> = {
  abdominal: [
    { name: 'Bexiga', description: 'ok ok ok ok' },
    { name: 'Útero e ovários', description: '' },
    { name: 'Rins', description: '' },
    { name: 'Baço', description: '' },
  ],
  ocular: [
    { name: 'Córnea (OD e OE)', description: '' },
    { name: 'Cristalino (OD e OE)', description: '' },
    { name: 'Câmara vítrea', description: '' },
  ],
  gestacional: [
    { name: 'Número de fetos', description: '' },
    { name: 'Batimentos cardíacos fetais', description: '' },
  ],
}

export default function CriadorDeLaudo() {
  const [modelo, setModelo] = useState('')
  const [campos, setCampos] = useState<{ id: string; nome: string; valor: string }[]>([])
  const [novoNome, setNovoNome] = useState('')

  const adicionarCampo = () => {
    if (!novoNome.trim()) return
    setCampos((prev) => [...prev, { id: Date.now().toString(), nome: novoNome.trim(), valor: '' }])
    setNovoNome('')
  }

  const atualizarCampo = (id: string, novoValor: string) => {
    setCampos((prev) =>
      prev.map((campo) => (campo.id === id ? { ...campo, valor: novoValor } : campo))
    )
  }

  const removerCampo = (id: string) => {
    setCampos((prev) => prev.filter((campo) => campo.id !== id))
  }

  const aplicarModelo = (tipo: string) => {
    const predefinidos = modelosPredefinidos[tipo] || []
    setCampos(
      predefinidos.map((campo, idx) => ({
        id: `predef-${idx}`,
        nome: campo.name,
        valor: campo.description,
      }))
    )
  }

  const laudoJson = campos.reduce(
    (acc, campo, index) => {
      acc[`field_${index + 1}`] = {
        name: campo.nome,
        description: campo.valor,
      }
      return acc
    },
    {} as Record<string, { name: string; description: string }>
  )

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Criador de Laudos Veterinários</h1>

      <div className="flex gap-2">
        <select
          value={modelo}
          onChange={(e) => {
            const tipo = e.target.value
            setModelo(tipo)
            aplicarModelo(tipo)
          }}
          className="rounded border p-2"
        >
          <option value="">Selecione um modelo</option>
          {Object.keys(modelosPredefinidos).map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-500">
          Sugestão de campos será aplicada automaticamente
        </span>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Nome do campo personalizado"
          className="w-full rounded border p-2"
        />
        <button onClick={adicionarCampo} className="rounded bg-green-600 px-4 py-2 text-white">
          Adicionar campo
        </button>
      </div>

      <div className="space-y-4">
        {campos.map((campo) => (
          <div key={campo.id} className="flex flex-col gap-1 border-b pb-3">
            <div className="flex items-center justify-between">
              <label className="font-semibold">{campo.nome}</label>
              <button
                onClick={() => removerCampo(campo.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remover
              </button>
            </div>
            <textarea
              rows={3}
              placeholder={`Descrição para "${campo.nome}"`}
              value={campo.valor}
              onChange={(e) => atualizarCampo(campo.id, e.target.value)}
              className="w-full rounded border p-2"
            />
          </div>
        ))}
      </div>

      <div className="rounded bg-gray-100 p-4">
        <h2 className="mb-2 text-lg font-bold">Pré-visualização do JSON</h2>
        <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(laudoJson, null, 2)}</pre>
      </div>

      {/* <div className="rounded bg-white p-4 shadow-md">
        <h2 className="mb-2 text-lg font-bold">Pré-visualização em PDF</h2>
        <PDFViewer dados={laudoJson} titulo={modelo} />
      </div> */}
      <div className="rounded bg-white p-4 shadow-md">
        <h2 className="mb-2 text-lg font-bold">Pré-visualização Estática (Simulação de PDF)</h2>
        <HtmlPdfPreview dados={laudoJson} titulo={modelo} />
      </div>
    </div>
  )
}
