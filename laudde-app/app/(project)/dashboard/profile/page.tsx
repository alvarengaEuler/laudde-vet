'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
    profile: {
      name: '',
      phone: '',
      city: '',
      state: '',
    },
  })

  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name.startsWith('profile.')) {
      const key = name.replace('profile.', '')
      setForm((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [key]: value,
        },
      }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    try {
      // 1. Criar usuário
      const userRes = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        }),
      })

      if (!userRes.ok) throw new Error('Erro ao criar usuário')
      const user = await userRes.json()

      // 2. Criar perfil associado ao user.id
      const profileRes = await fetch('/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form.profile,
          userId: user.id,
        }),
      })

      if (!profileRes.ok) throw new Error('Erro ao criar perfil')

      setMessage('Usuário e perfil criados com sucesso!')
      setForm({
        name: '',
        email: '',
        password: '',
        role: 'admin',
        profile: {
          name: '',
          phone: '',
          city: '',
          state: '',
        },
      })
    } catch (err: any) {
      console.error(err)
      setMessage(err.message || 'Erro desconhecido')
    }
  }

  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="mb-4 text-xl font-bold">Cadastrar Usuário</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />

        <hr />
        <h2 className="text-lg font-semibold">Perfil</h2>
        <input
          name="profile.name"
          placeholder="Nome do perfil"
          value={form.profile.name}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          name="profile.phone"
          placeholder="Telefone"
          value={form.profile.phone}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="profile.city"
          placeholder="Cidade"
          value={form.profile.city}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="profile.state"
          placeholder="Estado"
          value={form.profile.state}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          Cadastrar
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
