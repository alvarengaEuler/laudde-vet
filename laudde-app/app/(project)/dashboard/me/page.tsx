'use client'

import type React from 'react'

import { useState, useEffect, useRef, useCallback } from 'react'
import { User, Phone, Building, FileCheck, Wallet, Upload, Save, Camera } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import { uploadImage } from '@/lib/uploadImage'

import { UserProfile } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { ProfileSkeleton } from './_components/profile-skeleton'

// Fetcher para React Query
async function fetchUserProfile(): Promise<Partial<UserProfile>> {
  const res = await fetch('/api/user-profile')
  if (!res.ok) throw new Error('Erro ao buscar perfil do usuário')
  return res.json()
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [avatar, setAvatar] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [logo, setLogo] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const [signature, setSignature] = useState<File | null>(null)
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user-profile'],
    queryFn: fetchUserProfile,
  })

  const [profileData, setProfileData] = useState<Partial<UserProfile>>({})

  // Atualiza estado local quando os dados carregam
  useEffect(() => {
    if (data) {
      setProfileData(data)
      setAvatarPreview(data.avatarPictureUrl ?? '/placeholder.svg')
      setLogoPreview(data.logoPictureURL ?? '/placeholder.svg')
      setSignaturePreview(data.signaturePictureURL ?? '/placeholder.svg')
    }
  }, [data])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatar(file)
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLogo(file)
      setLogoPreview(URL.createObjectURL(file))
    }
  }

  const handleSignatureChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return

      const reader = new FileReader()

      reader.onload = () => {
        const img = new window.Image()
        img.onload = () => {
          const canvas = canvasRef.current
          if (!canvas) {
            console.error('Canvas not found')
            return
          }

          const ctx = canvas.getContext('2d')
          if (!ctx) {
            console.error('Canvas context not available')
            return
          }

          canvas.width = img.width
          canvas.height = img.height

          ctx.drawImage(img, 0, 0)

          const imageData = ctx.getImageData(0, 0, img.width, img.height)
          const data = imageData.data

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i]
            const g = data[i + 1]
            const b = data[i + 2]

            const brightness = (r + g + b) / 3
            const threshold = 180
            const color = brightness > threshold ? 255 : 0

            data[i] = data[i + 1] = data[i + 2] = color
          }

          ctx.putImageData(imageData, 0, 0)

          const dataUrl = canvas.toDataURL('image/png')
          // console.log('Generated preview URL:', dataUrl)
          setSignaturePreview(dataUrl)

          canvas.toBlob((blob) => {
            if (blob) {
              const processedFile = new File([blob], file.name, { type: 'image/png' })
              setSignature(processedFile)
            } else {
              console.error('Failed to create blob from canvas')
            }
          }, 'image/png')
        }

        if (typeof reader.result === 'string') {
          img.src = reader.result
        }
      }

      reader.readAsDataURL(file)
    },
    [canvasRef]
  )

  const handleSaveProfile = async () => {
    setIsSaving(true)
    setIsEditing(false)
    try {
      const userId = '22222222-2222-2222-2222-222222222222'

      const [avatarPictureUrl, logoPictureURL, signaturePictureURL] = await Promise.all([
        avatar ? uploadImage(avatar, 'profile', userId) : null,
        logo ? uploadImage(logo, 'logo', userId) : null,
        signature ? uploadImage(signature, 'signature', userId) : null,
      ])

      if (
        (avatar && !avatarPictureUrl) ||
        (logo && !logoPictureURL) ||
        (signature && !signaturePictureURL)
      ) {
        throw new Error('Erro no upload das imagens.')
      }

      const updatedProfile = {
        ...profileData,
        ...(avatarPictureUrl !== null && { avatarPictureUrl }),
        ...(logoPictureURL !== null && { logoPictureURL: logoPictureURL }),
        ...(signaturePictureURL !== null && { signaturePictureURL: signaturePictureURL }),
      }

      await fetch('/api/user-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfile),
      })

      toast.success('Suas informações foram atualizadas com sucesso.')
    } catch (error) {
      console.error('Erro ao salvar o perfil:', error)
      toast.error('Ocorreu um erro ao salvar suas informações.')
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return <ProfileSkeleton />
  }

  if (isError) {
    return <p>Erro ao carregar os dados do perfil.</p>
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <h1 className="text-2xl font-bold">Meu Perfil </h1>
          {isSaving && <span>Salvando...</span>}
        </div>
        <p className="text-sm text-gray-500">Gerencie suas informações pessoais e profissionais</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Coluna principal */}
        <div className="md:col-span-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium">Informações Pessoais</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                {isEditing ? 'Cancelar' : 'Editar'}
              </button>
            </div>

            {/* Campos Pessoais */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full rounded-lg border py-2 pl-10 pr-4 ${isEditing ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'}`}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Telefone</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone ?? ''}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full rounded-lg border py-2 pl-10 pr-4 ${isEditing ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Informações Profissionais */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h2 className="mb-6 text-lg font-medium">Informações Profissionais</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">CNPJ</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <Building size={18} />
                      </div>
                      <input
                        type="text"
                        name="cnpj"
                        value={profileData.cnpj ?? ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full rounded-lg border py-2 pl-10 pr-4 ${isEditing ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">CRMV</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <FileCheck size={18} />
                      </div>
                      <input
                        type="text"
                        name="CRMV"
                        value={profileData.CRMV ?? ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full rounded-lg border py-2 pl-10 pr-4 ${isEditing ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'}`}
                      />
                    </div>
                  </div>
                </div>

                {/* PIX */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Chave PIX</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <Wallet size={18} />
                    </div>
                    <input
                      type="text"
                      name="pixKey"
                      value={profileData.pixKey ?? ''}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full rounded-lg border py-2 pl-10 pr-4 ${isEditing ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'}`}
                    />
                  </div>
                </div>

                {/* Redes Sociais e Website */}
                {[
                  { label: 'Instagram Handle', name: 'instagramHandle' },
                  { label: 'Instagram URL', name: 'instagramURL' },
                  { label: 'Twitter Handle', name: 'twitterHandle' },
                  { label: 'Twitter URL', name: 'twitterURL' },
                  { label: 'Website Handle', name: 'websiteHandle' },
                  { label: 'Website URL', name: 'websiteURL' },
                ].map(({ label, name }) => (
                  <div key={name}>
                    <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
                    <input
                      type="text"
                      name={name}
                      value={(profileData as any)[name]}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full rounded-lg border px-4 py-2 ${isEditing ? 'border-gray-300 bg-white' : 'border-gray-200 bg-gray-50'}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Botão Salvar */}
            {isEditing && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSaveProfile}
                  className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  <Save size={18} className="mr-2" />
                  Salvar Alterações
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Coluna lateral: Avatar, Logo e Assinatura */}
        <div className="space-y-6">
          {/* Avatar */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Foto de Perfil</h2>
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden rounded-full bg-gray-100">
                {avatarPreview ? (
                  <Image
                    src={avatarPreview || '/placeholder.svg'}
                    alt="Perfil"
                    className="h-full w-full object-cover"
                    width={160}
                    height={160}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
                    <User size={64} />
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="mt-2">
                  <label
                    htmlFor="avatar-upload"
                    className="flex cursor-pointer items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
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

          {/* Logo */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Logo</h2>
            <div className="flex flex-col items-center">
              <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                {logoPreview ? (
                  <Image
                    src={logoPreview || '/placeholder.svg'}
                    alt="Logo"
                    className="max-h-full max-w-full object-contain"
                    width={160}
                    height={160}
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <Building size={48} />
                    <span className="mt-2 text-sm">Nenhuma logo</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="mt-4">
                  <label
                    htmlFor="logo-upload"
                    className="flex cursor-pointer items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    <Upload size={18} className="mr-2" />
                    Fazer upload da logo
                  </label>
                  <input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Assinatura */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Assinatura Digital</h2>
            <div className="flex flex-col items-center">
              <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                {signaturePreview ? (
                  <Image
                    src={signaturePreview || '/placeholder.svg'}
                    alt="Assinatura"
                    className="max-h-full max-w-full object-contain"
                    width={160}
                    height={160}
                    unoptimized
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <FileCheck size={36} />
                    <span className="mt-2 text-sm">Nenhuma assinatura</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="mt-4">
                  <label
                    htmlFor="signature-upload"
                    className="flex cursor-pointer items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
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
