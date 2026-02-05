import { Github, Linkedin, Twitter, Mail, Shield } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { href: 'https://github.com/AryzXploit', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/aryaarjuna', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/AryzXploit', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:contact@arya.dev', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Shield className="w-8 h-8 text-cyber-green" />
              <span className="font-mono text-lg font-bold">
                <span className="text-cyber-green">&lt;</span>
                <span className="text-white">Arya</span>
                <span className="text-cyber-green">/&gt;</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm font-mono">
              Bug Hunter & Cybersecurity Enthusiast
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-cyber-green uppercase tracking-wider text-sm">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Achievements', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyber-green transition-colors text-sm font-mono"
                >
                  {'>'} {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-cyber-green uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-dark-border rounded-lg text-gray-400 hover:text-cyber-green hover:border-cyber-green transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-mono">
              <span className="text-cyber-green">$</span> echo &quot;© {new Date().getFullYear()} Muhammad Arya. All rights reserved.&quot;
            </p>
            <p className="text-gray-500 text-sm font-mono">
              <span className="text-cyber-green">[</span> Built with Next.js + Tailwind <span className="text-cyber-green">]</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
