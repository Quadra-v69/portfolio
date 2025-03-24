"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Advanced Authentication System",
    description:
      "A secure authentication system with multi-factor authentication, role-based access control, and session management.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "JWT"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Quadra-v69",
    demo: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Movie Streaming Platform",
    description:
      "A full-featured movie streaming website with recommendation engine, user profiles, and payment integration.",
    technologies: ["Python", "Flask", "MongoDB", "React", "AWS S3"],
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Quadra-v69",
    demo: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Decentralized Marketplace",
    description: "A blockchain-based marketplace for digital assets with smart contracts for secure transactions.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Quadra-v69",
    demo: "#",
    category: "blockchain",
  },
  {
    id: 4,
    title: "Smart Contract Audit Tool",
    description:
      "An automated tool for auditing smart contracts to identify security vulnerabilities and optimization opportunities.",
    technologies: ["Python", "Solidity", "Slither", "Mythril"],
    image: "https://images.unsplash.com/photo-1526378800651-c1a63d2b0ca1?q=80&w=2069&auto=format&fit=crop",
    github: "https://github.com/Quadra-v69",
    demo: "#",
    category: "blockchain",
  },
  {
    id: 5,
    title: "AI-Powered Trading Bot",
    description: "A trading bot that uses machine learning algorithms to predict market trends and execute trades.",
    technologies: ["Python", "TensorFlow", "Pandas", "API Integration"],
    image: "https://images.unsplash.com/photo-1642790551116-18e150f248e5?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Quadra-v69",
    demo: "#",
    category: "ai",
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology to ensure integrity and immutability.",
    technologies: ["Solidity", "Ethereum", "React", "MetaMask"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Quadra-v69",
    demo: "#",
    category: "blockchain",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "blockchain", name: "Blockchain" },
  { id: "ai", name: "AI & ML" },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <div className="neon-line w-24 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, blockchain applications, and AI solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full ${
                activeCategory === category.id
                  ? "bg-neon-blue text-black hover:bg-neon-blue/90"
                  : "border-neon-blue/50 text-gray-300 hover:border-neon-blue hover:text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="futuristic-card h-full flex flex-col bg-black border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-neon-blue hover:text-white transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

