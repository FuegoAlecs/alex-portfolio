import type { Metadata } from 'next'
import { Space_Grotesk, Clash_Display } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const clashDisplay = Clash_Display({
  subsets: ['latin'],
  variable: '--font-clash-display',
})

export const metadata: Metadata = {
  title: 'Alex Fuego | Web3 Developer Portfolio',
  description: 'Welcome to my Web3 portfolio showcasing my blockchain and development projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${clashDisplay.variable}`}>
      <body className="bg-cyber-dark text-white font-space-grotesk">
        {children}
      </body>
    </html>
  )
} 