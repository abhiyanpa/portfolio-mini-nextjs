'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Minecraft Server Status', description: 'Monitor the status of Minecraft servers. Get real-time updates and ensure your server is running smoothly.', link: '#' },
  { id: 2, title: 'IP Tracker', description: 'Get detailed information about any IP address, including geographical location and ISP details.', link: '#' },
  { id: 3, title: 'QR Generator - Web', description: '🚀 Modern QR code generator with multiple formats & themes. Built with Flask.', link: 'https://github.com/abhiyanpa/qr-gen-web' },
  { id: 4, title: 'QR Generator - Python', description: '🚀 Simple QR code generator built in Python. Supports URL, WiFi, Text & WhatsApp QR codes with custom styling.', link: 'https://github.com/abhiyanpa/qr-gen-python' },
  { id: 5, title: 'INDIAN MC', description: "IndianMC is one of India's largest Minecraft server networks, offering a thrilling anarchy-style Crystal PvP.", link: 'https://discord.gg/indianmc' },
  { id: 6, title: 'AI CHATBOT', description: 'Upcoming Project that will be released soon...', link: '#' },
]

export default function ProjectGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <a href={project.link} className="block p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            {hoveredId === project.id && (
              <motion.div
                className="mt-4 text-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Click to view project →
              </motion.div>
            )}
          </a>
        </motion.div>
      ))}
    </div>
  )
}

