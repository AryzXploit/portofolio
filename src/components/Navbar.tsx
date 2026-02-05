'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Terminal, Shield } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-cyber-green group-hover:animate-pulse" />
            <span className="font-mono text-lg font-bold">
              <span className="text-cyber-green">&lt;</span>
              <span className="text-white">Arya</span>
              <span className="text-cyber-green">/&gt;</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                  pathname === link.href
                    ? 'text-cyber-green'
                    : 'text-gray-400 hover:text-cyber-green'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyber-green transform origin-left transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-cyber-green transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 border-l-2 ${
                  pathname === link.href
                    ? 'text-cyber-green border-cyber-green bg-cyber-green/10'
                    : 'text-gray-400 border-transparent hover:text-cyber-green hover:border-cyber-green hover:bg-cyber-green/5'
                }`}
              >
                <Terminal className="inline w-4 h-4 mr-2" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
