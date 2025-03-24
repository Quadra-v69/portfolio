"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "Python", level: 95, color: "neon-blue" },
  { name: "Blockchain", level: 90, color: "neon-purple" },
  { name: "Smart Contracts", level: 85, color: "neon-pink" },
  { name: "Web Development", level: 80, color: "neon-blue" },
  { name: "AI/ML", level: 75, color: "neon-purple" },
  { name: "Database Management", level: 85, color: "neon-pink" },
]

const technologies = [
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "Solidity",
  "Ethereum",
  "Web3.js",
  "Truffle",
  "Hardhat",
  "IPFS",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "TensorFlow",
  "PyTorch",
  "Git",
  "AWS",
  "Firebase",
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">My Skills</span>
          </h2>
          <div className="neon-line w-24 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Core Competencies</h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-gray-300">{skill.name}</h4>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className={`h-2 bg-gray-800`}
                    indicatorClassName={`bg-${skill.color}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Technologies & Tools</h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <div className="px-4 py-2 rounded-full glass-effect border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 text-gray-300 hover:text-white">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

