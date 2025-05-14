import type { ReactNode } from "react"

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
  colorClass = "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20",
}: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-none">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1 dark:text-white">{value}</p>
          {description && <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
        </div>
        <div className={`p-2 sm:p-3 rounded-lg ${colorClass}`}>{icon}</div>
      </div>
    </div>
  )
}

export default StatsCard
