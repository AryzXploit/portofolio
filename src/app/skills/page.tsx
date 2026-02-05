'use client'

import { useState } from 'react'
import { 
  Shield, Code, Terminal, Database, Globe, Lock, 
  Bug, Wifi, Server, FileCode, Cpu, Eye
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Web Security',
    icon: Globe,
    skills: [
      { name: 'XSS (Cross-Site Scripting)', level: 95 },
      { name: 'SQL Injection', level: 90 },
      { name: 'CSRF', level: 88 },
      { name: 'SSRF', level: 85 },
      { name: 'IDOR', level: 92 },
      { name: 'Authentication Bypass', level: 87 },
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Bash Scripting', level: 88 },
      { name: 'PHP', level: 75 },
      { name: 'Go', level: 60 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    icon: Terminal,
    skills: [
      { name: 'Burp Suite', level: 95 },
      { name: 'Nmap', level: 88 },
      { name: 'Metasploit', level: 80 },
      { name: 'SQLMap', level: 85 },
      { name: 'Nuclei', level: 90 },
      { name: 'ffuf/dirsearch', level: 92 },
    ],
  },
  {
    title: 'Other Skills',
    icon: Cpu,
    skills: [
      { name: 'Linux Administration', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'API Security', level: 90 },
      { name: 'Report Writing', level: 85 },
    ],
  },
]

const certifications = [
  { name: 'Bug Bounty Hunter', platform: 'HackerOne', year: '2023' },
  { name: 'Web Security Expert', platform: 'Bugcrowd', year: '2023' },
  { name: 'CTF Player', platform: 'Various', year: 'Ongoing' },
]

const tools = [
  { icon: Bug, name: 'Burp Suite' },
  { icon: Terminal, name: 'Kali Linux' },
  { icon: Database, name: 'SQLMap' },
  { icon: Wifi, name: 'Wireshark' },
  { icon: Server, name: 'Docker' },
  { icon: FileCode, name: 'VS Code' },
  { icon: Lock, name: 'Hashcat' },
  { icon: Eye, name: 'Nuclei' },
]

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green font-mono">{'<'}</span>
            <span className="text-white">Skills</span>
            <span className="text-cyber-green font-mono">{'/>'}</span>
          </h1>
          <p className="text-gray-400 font-mono">
            <span className="text-cyber-green">$</span> cat ~/skills/arsenal.json
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-cyber-green text-black'
                  : 'bg-dark-card border border-dark-border text-gray-400 hover:border-cyber-green hover:text-cyber-green'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.title}
            </button>
          ))}
        </div>

        <div className="cyber-card p-8 rounded-lg mb-16">
          <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center">
            <span className="text-cyber-green mr-2">{'>'}</span>
            {skillCategories[activeCategory].title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300 font-mono">{skill.name}</span>
                  <span className="text-cyber-green font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
            <span className="text-cyber-green">{'>'}</span> Tools Arsenal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg text-center group hover:border-cyber-green/50 transition-all duration-300"
              >
                <tool.icon className="w-12 h-12 text-cyber-green mx-auto mb-4 group-hover:animate-pulse" />
                <span className="text-gray-300 font-mono text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
            <span className="text-cyber-green">{'>'}</span> Certifications & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg border-l-4 border-l-cyber-green hover:bg-cyber-green/5 transition-all duration-300"
              >
                <Shield className="w-8 h-8 text-cyber-green mb-4" />
                <h4 className="text-white font-bold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm font-mono">{cert.platform}</p>
                <p className="text-cyber-green text-sm font-mono mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
