"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DollarSign, User, LogOut } from "lucide-react"

const menuItems = [
  { name: "Planos", href: "/admin/planos", icon: DollarSign },
  { name: "Usuários", href: "/admin/usuarios", icon: User },
  
]

const AdminSidebar = () => {
  const pathname = usePathname()

  return (
    <div className="hidden w-64 bg-white border-r border-gray-200 h-screen lg:flex flex-col">
      <div className="p-6 border-b border-gray-200">
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
          <LogOut size={18} />
          <span>Sair</span>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
