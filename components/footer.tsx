"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-gradient">
              Rantu Thakuria
            </Link>
            <p className="text-gray-400 mt-2">Python Developer & Blockchain Specialist</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; {currentYear} Rantu Thakuria. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Designed with ❤️ and Next.js</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

