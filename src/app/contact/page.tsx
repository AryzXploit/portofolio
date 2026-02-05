'use client'

import { useState, useEffect } from 'react'
import { Send, Mail, MapPin, Github, Linkedin, Twitter, AlertCircle, CheckCircle, Clock } from 'lucide-react'

const RATE_LIMIT_KEY = 'contact_rate_limit'
const RATE_LIMIT_COUNT_KEY = 'contact_count'
const MAX_REQUESTS = 3
const COOLDOWN_MINUTES = 60

interface RateLimitState {
  isLocked: boolean
  remainingTime: number
  remainingAttempts: number
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [rateLimit, setRateLimit] = useState<RateLimitState>({
    isLocked: false,
    remainingTime: 0,
    remainingAttempts: MAX_REQUESTS,
  })

  useEffect(() => {
    checkRateLimit()
    const interval = setInterval(checkRateLimit, 1000)
    return () => clearInterval(interval)
  }, [])

  const checkRateLimit = () => {
    const lockUntil = localStorage.getItem(RATE_LIMIT_KEY)
    const count = parseInt(localStorage.getItem(RATE_LIMIT_COUNT_KEY) || '0')

    if (lockUntil) {
      const lockTime = parseInt(lockUntil)
      const now = Date.now()

      if (now < lockTime) {
        const remainingMs = lockTime - now
        const remainingMinutes = Math.ceil(remainingMs / 60000)
        setRateLimit({
          isLocked: true,
          remainingTime: remainingMinutes,
          remainingAttempts: 0,
        })
        return
      } else {
        localStorage.removeItem(RATE_LIMIT_KEY)
        localStorage.removeItem(RATE_LIMIT_COUNT_KEY)
      }
    }

    setRateLimit({
      isLocked: false,
      remainingTime: 0,
      remainingAttempts: MAX_REQUESTS - count,
    })
  }

  const incrementRateLimit = () => {
    const count = parseInt(localStorage.getItem(RATE_LIMIT_COUNT_KEY) || '0') + 1
    localStorage.setItem(RATE_LIMIT_COUNT_KEY, count.toString())

    if (count >= MAX_REQUESTS) {
      const lockUntil = Date.now() + COOLDOWN_MINUTES * 60 * 1000
      localStorage.setItem(RATE_LIMIT_KEY, lockUntil.toString())
    }

    checkRateLimit()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rateLimit.isLocked) {
      setErrorMessage(`Rate limited. Please wait ${rateLimit.remainingTime} minutes.`)
      setStatus('error')
      return
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.')
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK

      if (!webhookUrl) {
        throw new Error('Discord webhook not configured')
      }

      const embed = {
        title: '📬 New Contact Form Submission',
        color: 0x00ff41,
        fields: [
          { name: '👤 Name', value: formData.name, inline: true },
          { name: '📧 Email', value: formData.email, inline: true },
          { name: '📝 Subject', value: formData.subject || 'No subject', inline: false },
          { name: '💬 Message', value: formData.message, inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Portfolio Contact Form',
        },
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      incrementRateLimit()
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const socialLinks = [
    { href: 'https://github.com/AryzXploit', icon: Github, label: 'GitHub', color: 'hover:text-white' },
    { href: 'https://linkedin.com/in/aryaarjuna', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-500' },
    { href: 'https://twitter.com/AryzXploit', icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400' },
    { href: 'mailto:arjunaajalahla100@gmail.com', icon: Mail, label: 'Email', color: 'hover:text-cyber-green' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green font-mono">{'<'}</span>
            <span className="text-white">Contact</span>
            <span className="text-cyber-green font-mono">{'/>'}</span>
          </h1>
          <p className="text-gray-400 font-mono">
            <span className="text-cyber-green">$</span> ./send_message.sh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="cyber-card p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6 font-mono">
                <span className="text-cyber-green">{'>'}</span> Get In Touch
              </h3>
              <p className="text-gray-400 mb-6">
                Interested in working together? Have a security concern to report? 
                Or just want to say hi? Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 text-cyber-green mr-3" />
                  <span className="font-mono">arjunaajalahla100@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 text-cyber-green mr-3" />
                  <span className="font-mono">Indonesia</span>
                </div>
              </div>
            </div>

            <div className="cyber-card p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6 font-mono">
                <span className="text-cyber-green">{'>'}</span> Connect
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 border border-dark-border rounded-lg text-gray-400 ${social.color} hover:border-cyber-green transition-all duration-300 group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {rateLimit.isLocked && (
              <div className="cyber-card p-4 rounded-lg border-l-4 border-l-cyber-red bg-red-500/5">
                <div className="flex items-center text-cyber-red">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-mono text-sm">
                    Rate limited. Try again in {rateLimit.remainingTime} minutes.
                  </span>
                </div>
              </div>
            )}

            {!rateLimit.isLocked && rateLimit.remainingAttempts < MAX_REQUESTS && (
              <div className="cyber-card p-4 rounded-lg border-l-4 border-l-yellow-500 bg-yellow-500/5">
                <div className="flex items-center text-yellow-500">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-mono text-sm">
                    {rateLimit.remainingAttempts} message{rateLimit.remainingAttempts !== 1 ? 's' : ''} remaining
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="cyber-card p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 font-mono text-sm text-gray-500">~/contact/form.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  <span className="text-cyber-green">$</span> name <span className="text-cyber-red">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-green focus:outline-none transition-colors"
                  placeholder="John Doe"
                  disabled={rateLimit.isLocked}
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  <span className="text-cyber-green">$</span> email <span className="text-cyber-red">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-green focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  disabled={rateLimit.isLocked}
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  <span className="text-cyber-green">$</span> subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-green focus:outline-none transition-colors"
                  placeholder="Security Collaboration"
                  disabled={rateLimit.isLocked}
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  <span className="text-cyber-green">$</span> message <span className="text-cyber-red">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white font-mono focus:border-cyber-green focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                  disabled={rateLimit.isLocked}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center text-cyber-red text-sm font-mono">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center text-cyber-green text-sm font-mono">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Message sent successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || rateLimit.isLocked}
                className="w-full cyber-button flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cyber-green border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
