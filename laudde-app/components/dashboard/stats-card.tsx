import type { ReactNode } from 'react'

interface StatsCardProps {
  title: string
  value: string | number
  icon: ReactNode
  description?: string
  colorClass?: string
}

const StatsCard = ({
  title,
  value,
  icon,
  description,
  colorClass = 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20',
}: StatsCardProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-2xl font-bold sm:text-3xl dark:text-white">{value}</p>
          {description && (
            <p className="mt-1 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <div className={`rounded-lg p-2 sm:p-3 ${colorClass}`}>{icon}</div>
      </div>
    </div>
  )
}

export default StatsCard
