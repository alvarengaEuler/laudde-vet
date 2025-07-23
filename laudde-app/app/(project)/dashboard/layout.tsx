import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from '@/components/sidebar/sidebar'
import MobileNavigation from '@/components/mobile-navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Toaster } from 'sonner'

import { QueryClientProviders } from '@/lib/providers/query-provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VetReports - Sistema de Laudos Veterinários',
  description: 'Sistema completo para gerenciamento de laudos veterinários',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} ]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-900/80">
              <div className="flex-1 overflow-y-auto p-4 md:px-4">
                <div className="absolute top-4 right-4 z-10">
                  <ThemeToggle />
                </div>
                <QueryClientProviders>
                  {children}
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProviders>
              </div>
              <Toaster />
              <MobileNavigation />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
