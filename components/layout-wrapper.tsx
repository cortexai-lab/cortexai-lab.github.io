"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation
        isDrawerOpen={isDrawerOpen}
        onMenuClick={() => setIsDrawerOpen((v) => !v)}
      />

      {/* Content area with responsive padding */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {children}
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Cortex AI Lab · University of Dhaka
        </div>
      </footer>
    </div>
  )
}