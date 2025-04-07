'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project 1',
    description: 'A Web3 project description goes here. This is a placeholder for your actual project.',
    technologies: ['React', 'Solidity', 'Web3.js'],
    image: '/project1.jpg',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Another amazing Web3 project description. This is a placeholder for your actual project.',
    technologies: ['Next.js', 'Ethereum', 'Tailwind CSS'],
    image: '/project2.jpg',
    link: '#',
  },
  // Add more projects here
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-clash-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of Web3 and blockchain projects. Each project represents my commitment to innovation and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-cyber-dark/50 rounded-xl overflow-hidden border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                {/* Add project image here */}
              </div>
              
              <div className="p-6">
                <h3 className="font-clash-display text-xl mb-2 text-cyber-blue">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 