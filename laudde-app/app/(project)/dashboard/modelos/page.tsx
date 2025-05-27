'use client'

import Link from 'next/link'
import { FileText, Edit, Eye } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Sistema de Laudos Veterinários</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Gerencie modelos de laudos, preencha dados e gere relatórios profissionais para sua
            clínica veterinária
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {/* Cadastro de Modelos */}
          <Link href="/models" className="group">
            <div className="transform rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Cadastro de Modelos</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Crie e gerencie modelos de laudos com campos dinâmicos e descrições padrão para
                  diferentes tipos de exames
                </p>
              </div>
            </div>
          </Link>

          {/* Preenchimento de Dados */}
          <Link href="/fill" className="group">
            <div className="transform rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-green-200">
                  <Edit className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Preenchimento de Dados</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Selecione um modelo e preencha os dados do exame para gerar o JSON dinâmico do
                  laudo
                </p>
              </div>
            </div>
          </Link>

          {/* Visualização e Impressão */}
          <Link href="/preview" className="group">
            <div className="transform rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-colors group-hover:bg-purple-200">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  Visualização e Impressão
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Visualize o laudo formatado estilo Word e imprima com layout profissional
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Rodapé com informações */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
            <h4 className="mb-2 font-semibold text-gray-800">
              Sistema Profissional para Clínicas Veterinárias
            </h4>
            <p className="text-sm text-gray-600">
              Digitalize seus laudos, padronize processos e melhore a qualidade dos relatórios
              médicos veterinários
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
