'use client'

import { useState } from 'react'
import { Trophy, ExternalLink, Shield, Bug, Award, Star, Calendar } from 'lucide-react'

const achievements = [
  {
    type: 'Hall of Fame',
    items: [
      {
        company: 'Google',
        title: 'Security Vulnerability Discovery',
        description: 'Discovered critical XSS vulnerability in Google services',
        year: '2023',
        link: '#',
      },
      {
        company: 'Microsoft',
        title: 'MSRC Acknowledgment',
        description: 'Reported authentication bypass vulnerability',
        year: '2023',
        link: '#',
      },
      {
        company: 'Meta',
        title: 'Facebook Bug Bounty',
        description: 'Found IDOR vulnerability affecting user data',
        year: '2022',
        link: '#',
      },
      {
        company: 'Twitter/X',
        title: 'Security Researcher Recognition',
        description: 'Discovered API security misconfiguration',
        year: '2023',
        link: '#',
      },
    ],
  },
  {
    type: 'CVEs',
    items: [
      {
        id: 'CVE-2023-XXXXX',
        title: 'SQL Injection in Web Application',
        severity: 'Critical',
        description: 'Remote code execution via SQL injection',
        year: '2023',
      },
      {
        id: 'CVE-2023-XXXXX',
        title: 'Cross-Site Scripting (XSS)',
        severity: 'High',
        description: 'Stored XSS leading to account takeover',
        year: '2023',
      },
      {
        id: 'CVE-2022-XXXXX',
        title: 'Authentication Bypass',
        severity: 'Critical',
        description: 'Bypass authentication mechanism via token manipulation',
        year: '2022',
      },
    ],
  },
  {
    type: 'CTF',
    items: [
      {
        name: 'HackTheBox',
        achievement: 'Pro Hacker Rank',
        description: 'Completed 50+ machines and challenges',
        year: '2023',
      },
      {
        name: 'TryHackMe',
        achievement: 'Top 1% Global',
        description: 'Completed offensive security learning paths',
        year: '2023',
      },
      {
        name: 'PicoCTF',
        achievement: 'Top 500 Globally',
        description: 'Participated in annual CTF competition',
        year: '2022',
      },
    ],
  },
]

const stats = [
  { icon: Bug, value: '50+', label: 'Bugs Reported' },
  { icon: Trophy, value: '20+', label: 'Hall of Fame' },
  { icon: Shield, value: '10+', label: 'CVEs' },
  { icon: Award, value: '$10K+', label: 'Bounties Earned' },
]

export default function AchievementsPage() {
  const [activeTab, setActiveTab] = useState(0)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'text-red-500 border-red-500'
      case 'High':
        return 'text-orange-500 border-orange-500'
      case 'Medium':
        return 'text-yellow-500 border-yellow-500'
      default:
        return 'text-cyber-green border-cyber-green'
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green font-mono">{'<'}</span>
            <span className="text-white">Achievements</span>
            <span className="text-cyber-green font-mono">{'/>'}</span>
          </h1>
          <p className="text-gray-400 font-mono">
            <span className="text-cyber-green">$</span> cat ~/achievements/hall_of_fame.log
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="cyber-card p-6 rounded-lg text-center group hover:border-cyber-green/50 transition-all duration-300"
            >
              <stat.icon className="w-10 h-10 text-cyber-green mx-auto mb-4 group-hover:animate-pulse" />
              <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
              <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {achievements.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeTab === index
                  ? 'bg-cyber-green text-black'
                  : 'bg-dark-card border border-dark-border text-gray-400 hover:border-cyber-green hover:text-cyber-green'
              }`}
            >
              {category.type}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {achievements[activeTab].type === 'Hall of Fame' &&
            achievements[activeTab].items.map((item: any, index: number) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg hover:border-cyber-green/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-cyber-green/10 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-cyber-green" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-cyber-green font-mono font-bold">{item.company}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <a
                    href={item.link}
                    className="mt-4 md:mt-0 inline-flex items-center text-cyber-green hover:text-cyber-blue transition-colors font-mono text-sm"
                  >
                    View <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}

          {achievements[activeTab].type === 'CVEs' &&
            achievements[activeTab].items.map((item: any, index: number) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg hover:border-cyber-green/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-mono font-bold text-white">{item.id}</span>
                        <span className={`px-2 py-0.5 text-xs font-mono border rounded ${getSeverityColor(item.severity)}`}>
                          {item.severity}
                        </span>
                      </div>
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 font-mono text-sm mt-4 md:mt-0">{item.year}</span>
                </div>
              </div>
            ))}

          {achievements[activeTab].type === 'CTF' &&
            achievements[activeTab].items.map((item: any, index: number) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg hover:border-cyber-green/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-cyber-blue font-mono font-bold">{item.name}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-white font-bold">{item.achievement}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
