export function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-6 w-40 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>
        <div className="h-4 w-72 rounded bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Coluna principal */}
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div className="h-5 w-40 rounded bg-gray-200" />
              <div className="h-4 w-20 rounded bg-gray-200" />
            </div>

            {/* Campos Pessoais */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="h-10 rounded bg-gray-100" />
                <div className="h-10 rounded bg-gray-100" />
              </div>
            </div>

            <div className="mt-8 space-y-6 border-t border-gray-100 pt-6">
              <div className="h-5 w-60 rounded bg-gray-200" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="h-10 rounded bg-gray-100" />
                <div className="h-10 rounded bg-gray-100" />
              </div>
              <div className="h-10 rounded bg-gray-100" />

              {/* Redes Sociais */}
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="h-10 rounded bg-gray-100" />
              ))}
            </div>
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="space-y-6">
          {/* Avatar */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 h-5 w-40 rounded bg-gray-200" />
            <div className="mx-auto h-40 w-40 rounded-full bg-gray-200" />
            <div className="mt-4 h-8 w-32 rounded bg-gray-200" />
          </div>

          {/* Logo */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 h-5 w-20 rounded bg-gray-200" />
            <div className="h-40 w-full rounded-lg bg-gray-200" />
            <div className="mt-4 h-8 w-40 rounded bg-gray-200" />
          </div>

          {/* Assinatura */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 h-5 w-40 rounded bg-gray-200" />
            <div className="h-28 w-full rounded-lg bg-gray-200" />
            <div className="mt-4 h-8 w-52 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
