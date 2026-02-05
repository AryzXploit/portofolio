'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Code, Shield, Target, Zap } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: '2021',
      title: 'Started Learning Cybersecurity',
      description: 'Began exploring web security, CTF challenges, and ethical hacking fundamentals.',
    },
    {
      year: '2022',
      title: 'First Bug Bounty Success',
      description: 'Discovered and reported first critical vulnerability, earning recognition from major tech company.',
    },
    {
      year: '2023',
      title: 'Bug Bounty Hunter',
      description: 'Active participation in HackerOne and Bugcrowd programs, multiple Hall of Fame entries.',
    },
    {
      year: '2024',
      title: 'Security Researcher',
      description: 'Focused on advanced web exploitation techniques and responsible disclosure.',
    },
  ]

  const interests = [
    { icon: Shield, title: 'Web Security', desc: 'XSS, SQLi, CSRF, SSRF' },
    { icon: Code, title: 'Scripting', desc: 'Python, Bash, JavaScript' },
    { icon: Target, title: 'Bug Bounty', desc: 'HackerOne, Bugcrowd' },
    { icon: Zap, title: 'Automation', desc: 'Custom security tools' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green font-mono">{'<'}</span>
            <span className="text-white">About Me</span>
            <span className="text-cyber-green font-mono">{'/>'}</span>
          </h1>
          <p className="text-gray-400 font-mono">
            <span className="text-cyber-green">$</span> cat ~/about/me.json
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="cyber-card p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-green to-cyber-blue flex items-center justify-center">
                <User className="w-10 h-10 text-black" />
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-white">Muhammad Arya</h2>
                <p className="text-cyber-green font-mono">Arjuna Habibullah</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 text-cyber-green mr-3" />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-5 h-5 text-cyber-green mr-3" />
                <span>3+ Years in Cybersecurity</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Shield className="w-5 h-5 text-cyber-green mr-3" />
                <span>Bug Hunter & Security Researcher</span>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              <span className="text-cyber-green">#</span> Who Am I?
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m a passionate cybersecurity enthusiast and bug hunter from Indonesia. 
              My journey in security started with curiosity about how systems work and how they can be exploited.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I specialize in web application security, finding vulnerabilities in production systems 
              through responsible disclosure programs. My goal is to make the internet a safer place, 
              one bug at a time.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not hunting bugs, I contribute to the security community through 
              write-ups and open-source tools.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
            <span className="text-cyber-green">{'>'}</span> Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((item, index) => (
              <div
                key={index}
                className="cyber-card p-6 rounded-lg text-center group hover:border-cyber-green/50 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-cyber-green mx-auto mb-4 group-hover:animate-pulse" />
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
            <span className="text-cyber-green">{'>'}</span> Journey Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark-border" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="cyber-card p-6 rounded-lg hover:border-cyber-green/50 transition-all duration-300">
                      <span className="text-cyber-green font-mono text-lg font-bold">{item.year}</span>
                      <h4 className="text-white font-bold mt-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyber-green rounded-full z-10" />
                  </div>
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
