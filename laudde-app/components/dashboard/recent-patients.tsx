import type { Patient, Clinic } from "@/lib/mock-data"

interface RecentPatientsProps {
  patients: Array<{
    patient: Patient
    clinic: Clinic
  }>
}

const RecentPatients = ({ patients }: RecentPatientsProps) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">Pacientes Recentes</h3>

      {/* Versão para dispositivos móveis - cards */}
      <div className="space-y-3 lg:hidden">
        {patients.map(({ patient, clinic }) => (
          <div key={patient.id} className="border border-gray-100 rounded-lg p-3 shadow-sm">
            <div className="font-medium">{patient.name}</div>
            <div className="text-sm text-gray-500 mt-1">
              {patient.species} • {patient.breed}
            </div>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
              <div>Tutor: {patient.ownerName}</div>
              <div>{clinic.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Versão para desktop - tabela */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="pb-3 font-medium">Paciente</th>
              <th className="pb-3 font-medium">Espécie</th>
              <th className="pb-3 font-medium">Clínica</th>
              <th className="pb-3 font-medium">Tutor</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(({ patient, clinic }) => (
              <tr key={patient.id} className="border-b last:border-b-0">
                <td className="py-3">
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-gray-500">{patient.breed}</div>
                </td>
                <td className="py-3">{patient.species}</td>
                <td className="py-3">{clinic.name}</td>
                <td className="py-3">{patient.ownerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentPatients
