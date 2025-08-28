// import ReportDetails from './_components/report-details'

// export default function ReportPage() {
//   // 🔹 Mock simples
//   const report = {
//     id: 'mock-report-id',
//     label: 'Laudo de Exemplo',
//     status: 'DRAFT',
//     createdAt: new Date().toISOString(),
//     patient: {
//       name: 'Rex',
//       species: 'Cão',
//     },
//     clinic: {
//       name: 'Clínica Veterinária PetCare',
//     },
//     user: {
//       name: 'Dra. Fernanda Lima',
//       email: 'fernanda@petcare.com.br',
//     },
//     veterinarians: [{ id: 'vet1', name: 'Dr. João Silva', crmv: 'SP-12345' }],

//     services: [
//       { id: 'srv1', description: 'Consulta Geral' },
//       { id: 'srv2', description: 'Exame de Sangue' },
//     ],
//     fields: {
//       sintomas: 'Febre, falta de apetite',
//       diagnostico: 'Infecção viral',
//       tratamento: 'Antibiótico por 7 dias',
//     },
//     maxAttempts: 5,
//     attemptCount: 2,
//     isBlocked: false,
//   }

//   return <ReportDetails report={report} />
// }

'use client'

import Image from 'next/image'

export default function UltrasoundReportPage() {
  return (
    <main className="flex justify-center bg-gray-100 p-4 print:p-0">
      <div
        className="relative min-h-[297mm] w-[210mm] bg-white p-8 px-20 text-black shadow-md print:min-h-[297mm] print:w-[210mm] print:bg-white print:p-8 print:shadow-none"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {/* Fundo timbrado */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-10 print:opacity-10">
          <Image src="/timbrado.png" alt="Papel Timbrado" fill style={{ objectFit: 'contain' }} />
        </div>

        {/* Conteúdo principal sobreposto ao fundo */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between border-b-2 border-b-[#0C4A6E] pb-2">
            <div>
              <Image src="/vetur-logo.png" alt="Vetur Logo" width={120} height={40} />
            </div>
            <div className="text-right text-sm font-semibold text-sky-900">
              <div>DIAGNÓSTICO POR IMAGEM VETERINÁRIA</div>
            </div>
          </div>

          {/* Dados do paciente */}
          <div className="mb-4 grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
            <div>
              <strong>Paciente:</strong> Bela
            </div>
            <div>
              <strong>Data:</strong> 00.03.2025
            </div>
            <div>
              <strong>Espécie:</strong> Canina
            </div>
            <div>
              <strong>Veterinário:</strong> Dra. Ingrid
            </div>
            <div>
              <strong>Raça:</strong> SRD
            </div>
            <div>
              <strong>Clínica:</strong> Vet Vida
            </div>
            <div>
              <strong>Idade:</strong> 7 anos
            </div>
            <div>
              <strong>Suspeita Clínica:</strong> Avaliação abdominal
            </div>
            <div>
              <strong>Sexo:</strong> Fêmea
            </div>
            <div>
              <strong>Tutor:</strong> João da Silva
            </div>
          </div>

          {/* Título */}
          <h2 className="text-md mb-4 text-center font-bold uppercase">
            Exame Ultrassonográfico da Região Abdominal
          </h2>

          {/* Conteúdo */}
          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              <strong>Bexiga:</strong> moderada repleção por conteúdo líquido anecóico homogêneo.
              Parede definida, regular e normoespessada.
            </p>
            <p>
              <strong>Útero e ovários:</strong> não visualizados. Paciente com histórico de
              ováriosalpingohisterectomia. Topografia de coto uterino e pedículos ovarianos sem
              alterações.
            </p>
            <p>
              <strong>Rins:</strong> tópicos, simétricos, dimensões preservadas, 3,19 cm (esq) e
              3,16 cm (dir). Contornos definidos, cortical e medular homogêneas e normoecóicas.
              Pelve sem alterações.
            </p>
            <p>
              <strong>Baço:</strong> dimensões preservadas, contornos bem definidos, parênquima
              homogêneo e ecogenicidade preservada. Vasos esplênicos preservados.
            </p>
            <p>
              <strong>Estômago:</strong> parede regular, normoespessa, com conteúdo alimentar e
              gasoso, motilidade preservada.
            </p>
            <p>
              <strong>Alças intestinais:</strong> distribuição habitual, conteúdo mucoso, colón com
              conteúdo heterogêneo. Motilidade preservada, parede normoespessa.
            </p>
            <p>
              <strong>Fígado:</strong> dimensões preservadas. Bordas definidas, cápsula íntegra.
              Parênquima homogêneo e ecogenicidade mantida. Vascularização preservada.
            </p>
            <p>
              <strong>Vesícula biliar:</strong> moderada distensão, conteúdo anecóico homogêneo.
              Parede bem definida.
            </p>
            <p>
              <strong>Pâncreas:</strong> topografia de lobo x, parênquima homogêneo, ecogenicidade
              preservada.
            </p>
            <p>
              <strong>Adrenais:</strong> formato mantido, bordas definidas. Distinção
              córtico-medular presente. Sem cistos ou nódulos.
            </p>
            <p>
              <strong>Linfônodos ilíaco medial e jejunais:</strong> dimensões preservadas, contornos
              regulares, ecotextura preservada.
            </p>
            <p>
              <strong>Outros:</strong> ausência de alterações em mesentério e peritônio. Não
              evidenciado líquido livre cavitário.
            </p>
            <p className="text-xs italic text-gray-600">
              Comentários: A interpretação das dimensões das adrenais deve ser correlacionada com o
              peso ideal do paciente (Melian et al, 2021).
            </p>

            <h3 className="mt-6 text-center font-semibold">Impressão Diagnóstica</h3>
            <p className="text-center">
              Órgãos avaliados dentro da normalidade ultrassonográfica neste exame.
            </p>
            <p className="mt-2 text-justify text-xs text-gray-700">
              O exame ultrassonográfico é de natureza complementar para o auxílio diagnóstico,
              devendo haver uma correlação com os achados clínicos do paciente e demais exames
              complementares, cabendo ao Médico Veterinário responsável a interpretação e associação
              dessas informações.
            </p>
          </div>
        </div>

        {/* Rodapé com imagem */}
        <span className="0 mt-4 flex flex-col items-start justify-center px-16">
          <Image
            src="/assinatura-ingrid.png"
            alt="Assinatura da Dra. Ingrid"
            width={40} // 80mm em px
            height={20}
            className="mb-2 mt-6"
          />
          <div className="mt-4">
            <p className="text-sm font-semibold">Ingrid Felix R. Silva</p>
            <p className="text-xs">Médica Veterinária</p>
            <p className="text-xs">CRMV/PB 2404</p>
          </div>
        </span>
        {/* <div className="absolute bottom-0 left-0 w-full">
          

          <Image
            src="/rodape-vetur.png"
            alt="Rodapé Vetur"
            width={210 * 3.78} // 210mm em px
            height={30}
            className="w-full object-cover print:hidden"
          />
        </div> */}
      </div>
    </main>
  )
}
