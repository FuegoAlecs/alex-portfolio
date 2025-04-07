'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Mascot } from '@/components/Mascot'
import { Navigation } from '@/components/Navigation'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-purple/20 to-cyber-blue/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          {/* Content */}
          <div className="container mx-auto px-4 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="font-clash-display text-5xl md:text-7xl mb-6 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                  Alex Fuego
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                  Web3 Developer & Blockchain Enthusiast
                </p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://twitter.com/FuegoAlec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyber-blue/10 border border-cyber-blue rounded-lg hover:bg-cyber-blue/20 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://t.me/FuegoAlec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyber-purple/10 border border-cyber-purple rounded-lg hover:bg-cyber-purple/20 transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </motion.div>

              {/* 3D Scene */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="h-[500px] w-full"
              >
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Mascot />
                  <OrbitControls enableZoom={false} />
                  <Environment preset="city" />
                </Canvas>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
} 