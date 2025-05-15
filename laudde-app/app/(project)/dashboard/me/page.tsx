"use client"

import type React from "react"

import { useState } from "react"
import { User, Phone, Mail, Key, Building, FileCheck, Wallet, Upload, Save, Camera } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
//   const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [avatar, setAvatar] = useState<string | null>("/placeholder.svg?height=200&width=200")
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [signature, setSignature] = useState<string | null>(null)

  const [profileData, setProfileData] = useState({
    name: "Dra. Ana Silva",
    phone: "(11) 98765-4321",
    email: "ana.silva@exemplo.com",
    password: "••••••••",
    cnpj: "12.345.678/0001-90",
    crm: "CRMV-SP 12345",
    pixKey: "ana.silva@exemplo.com",
    specialties: ["Ultrassonografia", "Radiologia"],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value,
    })
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatar(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoPreview(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setSignature(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    // toast({
    //   title: "Perfil atualizado",
    //   description: "Suas informações foram atualizadas com sucesso.",
    // })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Meu Perfil</h1>
        <p className="text-sm text-gray-500">Gerencie suas informações pessoais e profissionais</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna da esquerda - Informações básicas */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Informações Pessoais</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 text-sm font-medium hover:text-blue-800"
              >
                {isEditing ? "Cancelar" : "Editar"}
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                        isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                        isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                        isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Key size={18} />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={profileData.password}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                        isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h2 className="text-lg font-medium mb-6">Informações Profissionais</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Building size={18} />
                      </div>
                      <input
                        type="text"
                        name="cnpj"
                        value={profileData.cnpj}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                          isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CRMV</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FileCheck size={18} />
                      </div>
                      <input
                        type="text"
                        name="crm"
                        value={profileData.crm}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                          isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Chave PIX</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Wallet size={18} />
                    </div>
                    <input
                      type="text"
                      name="pixKey"
                      value={profileData.pixKey}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                        isEditing ? "bg-white border-gray-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Especialidades</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profileData.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center"
                      >
                        {specialty}
                        {isEditing && (
                          <button
                            className="ml-1 text-blue-800 hover:text-blue-900"
                            onClick={() => {
                              const newSpecialties = [...profileData.specialties]
                              newSpecialties.splice(index, 1)
                              setProfileData({ ...profileData, specialties: newSpecialties })
                            }}
                          >
                            &times;
                          </button>
                        )}
                      </span>
                    ))}
                    {isEditing && (
                      <button
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300 hover:bg-gray-200"
                        onClick={() => {
                          const specialty = prompt("Digite uma nova especialidade:")
                          if (specialty && !profileData.specialties.includes(specialty)) {
                            setProfileData({
                              ...profileData,
                              specialties: [...profileData.specialties, specialty],
                            })
                          }
                        }}
                      >
                        + Adicionar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSaveProfile}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Save size={18} className="mr-2" />
                  Salvar Alterações
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Coluna da direita - Foto e Assinatura */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-medium mb-4">Foto de Perfil</h2>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 mb-4">
                {avatar ? (
                  <img src={avatar || "/placeholder.svg"} alt="Perfil" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                    <User size={64} />
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="mt-2">
                  <label
                    htmlFor="avatar-upload"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center"
                  >
                    <Camera size={18} className="mr-2" />
                    Alterar foto
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-medium mb-4">Logo</h2>
            <div className="flex flex-col items-center">
              <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {logoPreview ? (
                  <img
                    src={logoPreview || "/placeholder.svg"}
                    alt="Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <Building size={48} />
                    <span className="mt-2 text-sm">Nenhuma logo</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="mt-4">
                  <label
                    htmlFor="logo-upload"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center"
                  >
                    <Upload size={18} className="mr-2" />
                    Fazer upload da logo
                  </label>
                  <input id="logo-upload" type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-medium mb-4">Assinatura Digital</h2>
            <div className="flex flex-col items-center">
              <div className="w-full h-28 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {signature ? (
                  <img
                    src={signature || "/placeholder.svg"}
                    alt="Assinatura"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <FileCheck size={36} />
                    <span className="mt-2 text-sm">Nenhuma assinatura</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="mt-4">
                  <label
                    htmlFor="signature-upload"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center"
                  >
                    <Upload size={18} className="mr-2" />
                    Fazer upload da assinatura
                  </label>
                  <input
                    id="signature-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleSignatureChange}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
