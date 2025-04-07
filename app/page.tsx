'use client'

import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { GridBackground } from '../components/GridBackground'
import { Mascot } from '../components/Mascot'

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-dark text-white">
      <GridBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-dark/90 to-cyber-dark/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-clash-display text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                Alex Fuego
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                Web3 Developer & Creative Technologist
              </p>
              <p className="text-gray-400 max-w-xl">
                Crafting immersive digital experiences at the intersection of Web3, 3D, and interactive design.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 border border-cyber-blue/20 text-cyber-blue rounded-lg font-medium hover:bg-cyber-blue/10 transition-colors"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Mascot />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 