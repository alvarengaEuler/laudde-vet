"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Search, ChevronsLeft, ChevronsRight } from "lucide-react"

interface DataTableProps<T> {
  data: T[]
  columns: {
    key: string
    header: string
    render?: (item: T) => React.ReactNode
  }[]
  searchable?: boolean
  searchKeys?: string[]
  itemsPerPage?: number
  onRowClick?: (item: T) => void
  children?: React.ReactNode
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchable = false,
  searchKeys = [],
  itemsPerPage = 10,
  onRowClick,
  children,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData =
    searchable && searchTerm
      ? data.filter((item) =>
          searchKeys.some((key) => String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())),
        )
      : data

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="space-y-4">
      {searchable && (
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 dark:text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {children}

      {/* Versão para dispositivos móveis - cards */}
      <div className="lg:hidden space-y-3">
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg p-3 dark:border-gray-700 ${
                onRowClick ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800" : ""
              }`}
              onClick={() => onRowClick && onRowClick(item)}
            >
              {columns.map((column) => (
                <div key={column.key} className="mb-2 last:mb-0">
                  <div className="text-xs text-gray-500 dark:text-gray-400">{column.header}</div>
                  <div>{column.render ? column.render(item) : item[column.key]}</div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400">Nenhum resultado encontrado</div>
        )}
      </div>

      {/* Versão para desktop - tabela */}
      <div className="hidden lg:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className={onRowClick ? "hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer" : ""}
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                    >
                      {column.render ? column.render(item) : item[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  Nenhum resultado encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredData.length)} de{" "}
            {filteredData.length} resultados
          </div>
          <div className="flex space-x-1 justify-center">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-200 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:disabled:text-gray-600"
              aria-label="Primeira página"
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-200 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:disabled:text-gray-600"
              aria-label="Página anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="px-4 py-2 text-sm dark:text-gray-300">
              {currentPage} de {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-200 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:disabled:text-gray-600"
              aria-label="Próxima página"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-200 disabled:opacity-50 dark:border-gray-700 dark:text-gray-300 dark:disabled:text-gray-600"
              aria-label="Última página"
            >
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
