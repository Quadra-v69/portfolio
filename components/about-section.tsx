"use client"

import { motion } from "framer-motion"
import { Code, Database, Cpu } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="neon-line w-24 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate Python developer with expertise in blockchain technology and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm Rantu Thakuria, a Python developer with a strong foundation in blockchain technology. With a BCA
              degree specializing in blockchain and AI, I combine technical expertise with innovative problem-solving to
              create cutting-edge solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in technology has led me to work on diverse projects including authentication systems, movie
              websites, decentralized applications (dApps), and smart contracts. I'm passionate about leveraging the
              power of blockchain to create secure, transparent, and efficient systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I'm constantly exploring new technologies and methodologies to stay at the forefront
              of the rapidly evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="futuristic-card border border-neon-blue/30 hover:border-neon-blue transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-blue/10 text-neon-blue">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Python Development</h3>
                    <p className="text-gray-400">
                      Proficient in building robust applications, web services, and automation tools using Python and
                      its ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="futuristic-card border border-neon-purple/30 hover:border-neon-purple transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-purple/10 text-neon-purple">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Blockchain Technology</h3>
                    <p className="text-gray-400">
                      Experienced in developing smart contracts, dApps, and implementing blockchain solutions for
                      various use cases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="futuristic-card border border-neon-pink/30 hover:border-neon-pink transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-pink/10 text-neon-pink">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Artificial Intelligence</h3>
                    <p className="text-gray-400">
                      Knowledge of AI principles and applications, with a focus on integrating AI with blockchain for
                      innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

