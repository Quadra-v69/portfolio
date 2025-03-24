"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University Name",
    period: "2018 - 2021",
    description: "Specialized in Blockchain Technology and Artificial Intelligence. Graduated with honors.",
    achievements: [
      "Developed a blockchain-based voting system as final year project",
      "Published research paper on AI applications in blockchain",
      "Received scholarship for academic excellence",
    ],
  },
]

const certifications = [
  {
    title: "Certified Blockchain Developer",
    issuer: "Blockchain Council",
    date: "2022",
    description:
      "Professional certification validating expertise in blockchain development and smart contract implementation.",
  },
  {
    title: "Python Professional Certification",
    issuer: "Python Institute",
    date: "2021",
    description: "Advanced certification demonstrating proficiency in Python programming and application development.",
  },
  {
    title: "AI & Machine Learning Specialization",
    issuer: "Coursera",
    date: "2022",
    description:
      "Comprehensive specialization covering machine learning algorithms, neural networks, and AI applications.",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education & Certifications</span>
          </h2>
          <div className="neon-line w-24 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-neon-blue" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="futuristic-card relative border border-neon-blue/30 hover:border-neon-blue transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-bl-lg flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-1 text-white">{item.degree}</h4>
                  <p className="text-neon-blue mb-4">{item.institution}</p>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="text-neon-blue mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
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
            <div className="flex items-center gap-3 mb-8">
              <Award size={24} className="text-neon-purple" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="futuristic-card border border-neon-purple/30 hover:border-neon-purple transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <span className="px-2 py-1 bg-neon-purple/10 text-neon-purple text-xs rounded">{cert.date}</span>
                  </div>
                  <p className="text-neon-purple mb-2">{cert.issuer}</p>
                  <p className="text-gray-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

