'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Terminal, ChevronRight, Shield, Bug, Code, Award } from 'lucide-react'

const typingTexts = [
  'Bug Hunter',
  'Penetration Tester',
  'Security Researcher',
  'Ethical Hacker',
]

export default function Home() {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typingTexts[textIndex]
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(current.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  const stats = [
    { icon: Bug, value: '50+', label: 'Bugs Found' },
    { icon: Shield, value: '20+', label: 'Hall of Fame' },
    { icon: Code, value: '3+', label: 'Years Experience' },
    { icon: Award, value: '10+', label: 'CVEs Reported' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center px-4 pt-20 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-4 py-2 border border-cyber-green/30 rounded-full bg-cyber-green/5">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse mr-2" />
            <span className="font-mono text-sm text-cyber-green">Available for Bug Bounty Programs</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-400 font-mono text-lg md:text-xl block mb-2">
              {'// Hello, World!'}
            </span>
            <span className="text-white">I&apos;m </span>
            <span className="cyber-text">Muhammad Arya</span>
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <Terminal className="w-6 h-6 text-cyber-green mr-3" />
            <span className="font-mono text-xl md:text-3xl text-gray-300">
              <span className="text-cyber-green">$</span> {currentText}
              <span className="text-cyber-green animate-pulse">|</span>
            </span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cybersecurity enthusiast specialized in <span className="text-cyber-green">web application security</span>, 
            finding vulnerabilities in top tech companies through responsible disclosure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="cyber-button inline-flex items-center justify-center group">
              <span>Contact Me</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/achievements" 
              className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-cyber-green hover:text-cyber-green transition-all duration-300 font-mono uppercase tracking-wider inline-flex items-center justify-center"
            >
              View Achievements
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg group hover:border-cyber-green/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-cyber-green mb-3 mx-auto group-hover:animate-pulse" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-dark-border">
        <div className="max-w-5xl mx-auto">
          <div className="cyber-card p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 font-mono text-sm text-gray-500">~/arya/portfolio</span>
            </div>
            <pre className="font-mono text-sm md:text-base overflow-x-auto">
              <code>
                <span className="text-cyber-green">$</span> <span className="text-gray-300">cat about.txt</span>{'\n\n'}
                <span className="text-gray-400">{'{'}</span>{'\n'}
                <span className="text-cyber-blue">  &quot;name&quot;</span>: <span className="text-yellow-400">&quot;Muhammad Arya Arjuna Habibullah&quot;</span>,{'\n'}
                <span className="text-cyber-blue">  &quot;role&quot;</span>: <span className="text-yellow-400">&quot;Bug Hunter & Security Researcher&quot;</span>,{'\n'}
                <span className="text-cyber-blue">  &quot;platforms&quot;</span>: [<span className="text-yellow-400">&quot;HackerOne&quot;</span>, <span className="text-yellow-400">&quot;Bugcrowd&quot;</span>],{'\n'}
                <span className="text-cyber-blue">  &quot;specialization&quot;</span>: <span className="text-yellow-400">&quot;Web Application Security&quot;</span>,{'\n'}
                <span className="text-cyber-blue">  &quot;status&quot;</span>: <span className="text-yellow-400">&quot;Hunting for bugs...&quot;</span>{'\n'}
                <span className="text-gray-400">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
