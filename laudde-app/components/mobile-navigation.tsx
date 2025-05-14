"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Users,
  Building2,
  FileCode,
  DollarSign,
  LogOut,
  Menu,
  X,
  Calculator,
  User,
} from "lucide-react"

const menuItems = [
  { name: "Dashboard mobile", href: "/", icon: LayoutDashboard },
  { name: "Laudos", href: "/laudos", icon: FileText },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Clínicas", href: "/clinicas", icon: Building2 },
  { name: "Modelos de Texto", href: "/templates", icon: FileCode },
  { name: "Financeiro", href: "/financeiro", icon: DollarSign },
  { name: "Tickets de Exames", href: "/financeiro/tickets", icon: Calculator },
  { name: "Perfil", href: "/perfil", icon: User },
]

const MobileNavigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar se é mobile ao carregar e quando a janela for redimensionada
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Limpar listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Fechar o menu quando um link for clicado em dispositivos móveis
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Header fixo para mobile */}
      <header className="border border-orange-500 fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-30 lg:hidden">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="ml-3 text-xl font-bold text-blue-600">Laudde</h1>
        </div>
      </header>

      {/* Overlay para quando o menu mobile estiver aberto */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-70 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Menu lateral - visível em desktop ou quando aberto em mobile */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Laudde</h1>
          <p className="text-sm text-gray-500">Sistema de Laudos</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
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

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <LogOut size={18} />
            <span>Sair</span>
          </div>
        </div>
      </aside>

      {/* Barra de navegação inferior para mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 lg:hidden">
        <div className="flex justify-around">
          {menuItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 ${isActive ? "text-blue-600" : "text-gray-600"}`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default MobileNavigation
