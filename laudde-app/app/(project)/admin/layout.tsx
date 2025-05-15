import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Sidebar from "@/components/sidebar"
import MobileNavigation from "@/components/mobile-navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import AdminSidebar from "@/components/admin-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VetReports - Sistema de Laudos Veterinários",
  description: "Sistema completo para gerenciamento de laudos veterinários",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto p-4 md:p-10">
                <div className="absolute top-4 right-4 z-10">
                  <ThemeToggle />
                </div>
                {children}
              </div>
              <MobileNavigation />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
