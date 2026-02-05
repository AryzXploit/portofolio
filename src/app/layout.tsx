import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MatrixRain from '@/components/MatrixRain'

export const metadata: Metadata = {
  title: 'Muhammad Arya | Cybersecurity Portfolio',
  description: 'Portfolio of Muhammad Arya Arjuna Habibullah — Bug Hunter & Cybersecurity Enthusiast. Explore his achievements, skills, and responsible disclosures in web security.',
  keywords: 'Cybersecurity, Bug Bounty, HackerOne, Bugcrowd, Web Exploitation, Portfolio, Ethical Hacking',
  authors: [{ name: 'Muhammad Arya Arjuna Habibullah' }],
  openGraph: {
    title: 'Muhammad Arya | Cybersecurity Portfolio',
    description: 'Explore the portfolio of a professional bug hunter and cybersecurity enthusiast.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-bg text-white font-sans antialiased min-h-screen">
        <MatrixRain />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
