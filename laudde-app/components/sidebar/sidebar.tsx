'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react'
import { menuItems, adminMenuItems } from './menu-itens'

const Sidebar = () => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div
      className={`hidden h-screen flex-col border-r bg-zinc-50 transition-all duration-300 lg:flex dark:bg-zinc-900/80 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
        {!isCollapsed && (
          <div>
            <h1 className="text-xl font-bold text-blue-600">Laudde</h1>
            <p className="text-sm text-gray-500">Sistema de Laudos</p>
          </div>
        )}
        <button onClick={toggleSidebar} className="ml-auto text-gray-500 hover:text-blue-600">
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
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
                  className={`group relative flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-blue-600 dark:text-blue-400' : ''} />
                  {!isCollapsed && <span>{item.name}</span>}

                  {/* Tooltip when collapsed */}
                  {isCollapsed && (
                    <span className="absolute left-full ml-2 w-max rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 border-t border-gray-200 p-4 dark:border-gray-800">
          {!isCollapsed && (
            <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Administração
            </h3>
          )}
          <ul className="mt-2 space-y-1">
            {adminMenuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isActive ? 'text-blue-600 dark:text-blue-400' : ''}
                    />
                    {!isCollapsed && <span>{item.name}</span>}
                    {isCollapsed && (
                      <span className="absolute left-full ml-2 w-max rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
                        {item.name}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <div className="border-t border-gray-200 p-4 dark:border-gray-800">
        <div className="group relative flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
          <LogOut size={18} />
          {!isCollapsed && <span>Sair</span>}
          {isCollapsed && (
            <span className="absolute left-full ml-2 w-max rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
              Sair
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
