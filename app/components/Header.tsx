"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from "next-themes"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const menuItems = [
    { href: "#about", label: "Обо мне" },
    { href: "#experience", label: "Опыт" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#contact", label: "Контакты" }
  ]

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/50 dark:bg-gray-900/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.a 
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 t bg-clip-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Максим Кораблев
        </motion.a>
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          {/* <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Переключить тему</span>
          </Button> */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-4 p-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

