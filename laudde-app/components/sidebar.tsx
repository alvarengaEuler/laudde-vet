'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Users,
  Building2,
  FileCode,
  DollarSign,
  LogOut,
  BriefcaseMedical,
  Dog,
  ShieldCheck,
  Tag,
} from 'lucide-react'

const menuItems = [
  { name: 'Dashboard-side', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Agenda', href: '/dashboard/agenda', icon: DollarSign },
  { name: 'Laudos', href: '/dashboard/laudos', icon: FileText },
  { name: 'Tutor', href: '/dashboard/tutor', icon: Users },
  { name: 'Pacientes', href: '/dashboard/pacientes', icon: Dog },
  { name: 'Clínicas', href: '/dashboard/clinicas', icon: Building2 },
  { name: 'Veterinários', href: '/dashboard/vets', icon: BriefcaseMedical },
  { name: 'Modelos de Texto', href: '/dashboard/templates', icon: FileCode },
  { name: 'Financeiross', href: '/dashboard/financeiro', icon: DollarSign },
]

const adminMenuItems = [
  { name: 'Usuários', href: '/admin/usuarios', icon: ShieldCheck },
  { name: 'Planos', href: '/admin/planos', icon: Tag },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="hidden h-screen w-64 flex-col border-r bg-zinc-50 lg:flex dark:bg-zinc-900/80">
      <div className="border-b border-gray-200 p-6 dark:border-gray-800">
        <h1 className="text-xl font-bold text-blue-600">Laudde</h1>
        <p className="text-sm text-gray-500">Sistema de Laudos</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-6 border-t border-gray-200 p-4 dark:border-gray-800">
          <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Administração
          </h3>
          <ul className="mt-2 space-y-1">
            {adminMenuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <div className="border-t border-gray-200 p-4 dark:border-gray-800">
        <div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
          <LogOut size={18} />
          <span>Sair</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
