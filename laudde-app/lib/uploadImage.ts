'use client' // se for num arquivo client-side em App Router

import { supabase } from '@/lib/supabase'

export async function uploadImage(
  file: File,
  folder: 'profile' | 'logo' | 'signature',
  userId: string
): Promise<string | null> {
  const fileExt = file.name.split('.').pop()
  const timestamp = Date.now() // só executado no navegador
  const filePath = `${folder}/${userId}-${timestamp}.${fileExt}`

  const { error } = await supabase.storage.from('avatars').upload(filePath, file, {
    cacheControl: '3600',
    upsert: true,
  })

  if (error) {
    console.error('Upload failed:', error.message)
    return null
  }

  const { data: publicURL } = supabase.storage.from('avatars').getPublicUrl(filePath)

  return publicURL?.publicUrl || null
}
