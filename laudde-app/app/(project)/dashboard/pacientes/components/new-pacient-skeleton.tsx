export default function NovoPacienteSkeleton() {
  return (
    <div className="animate-pulse space-y-4 sm:space-y-6">
      <div>
        <div className="h-6 w-1/3 rounded bg-gray-300 dark:bg-gray-700" />
        <div className="mt-2 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-600" />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="space-y-4 sm:space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              <div className="h-10 rounded-lg bg-gray-200 dark:bg-gray-700" />
              <div className="h-10 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}

          <div className="flex justify-end space-x-3">
            <div className="h-10 w-24 rounded-lg bg-gray-300 dark:bg-gray-600" />
            <div className="h-10 w-32 rounded-lg bg-gray-400 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  )
}
