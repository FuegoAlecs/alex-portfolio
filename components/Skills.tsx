'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Web3 Development',
    items: [
      { name: 'Solidity', level: 90 },
      { name: 'Smart Contracts', level: 85 },
      { name: 'Web3.js', level: 80 },
      { name: 'Ethereum', level: 85 },
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: '3D & Animation',
    items: [
      { name: 'Three.js', level: 80 },
      { name: 'React Three Fiber', level: 75 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Blender', level: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-clash-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical skills and expertise in Web3 development, frontend technologies, and 3D animation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-cyber-dark/50 rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors"
            >
              <h3 className="font-clash-display text-xl mb-6 text-cyber-blue">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyber-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 