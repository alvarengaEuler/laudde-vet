'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, Menu, X } from 'lucide-react'
import { menuItems } from './sidebar/menu-itens'

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
    window.addEventListener('resize', checkIfMobile)

    // Limpar listener
    return () => window.removeEventListener('resize', checkIfMobile)
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
      <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border border-b border-gray-200 border-orange-500 bg-white px-4 lg:hidden">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="ml-3 text-xl font-bold text-blue-600">Laudde</h1>
        </div>
      </header>

      {/* Overlay para quando o menu mobile estiver aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-70 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu lateral - visível em desktop ou quando aberto em mobile */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="border-b border-gray-200 p-6">
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
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
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

        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4">
          <div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100">
            <LogOut size={18} />
            <span>Sair</span>
          </div>
        </div>
      </aside>

      {/* Barra de navegação inferior para mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white lg:hidden">
        <div className="flex justify-around">
          {menuItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center px-3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}
              >
                <Icon size={20} />
                <span className="mt-1 text-xs">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default MobileNavigation
