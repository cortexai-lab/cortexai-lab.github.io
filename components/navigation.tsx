"use client"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  { name: "About", href: "#about" },
  { name: "News", href: "#news" },
  { name: "Publications", href: "#publications" },
  { name: "Fundings", href: "#fundings" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "People", href: "#people" },
  { name: "Join", href: "#join" },
  { name: "Contact", href: "#contact" },
]

export function Navigation({
  isDrawerOpen,
  onMenuClick,
}: {
  isDrawerOpen: boolean
  onMenuClick: () => void
}) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    if (isDrawerOpen) onMenuClick()
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-semibold text-gray-900">
            Cortex AI Lab
          </div>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={onMenuClick}
            className="p-2 rounded hover:bg-gray-100 flex-shrink-0"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={onMenuClick} />
          <div className="relative z-10 h-full w-72 max-w-[80vw] bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="font-semibold text-sm">Menu</div>
                <button
                  aria-label="Close"
                  className="p-2 rounded hover:bg-gray-100"
                  onClick={onMenuClick}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <nav className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full px-3 py-2.5 text-left text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-semibold text-lg text-gray-900">
              Cortex AI Lab
            </div>
            
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}