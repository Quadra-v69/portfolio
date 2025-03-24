"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text3D, Float, Environment } from "@react-three/drei"
import { type Mesh, type MeshStandardMaterial, Color } from "three"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

function CubeModel() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  useEffect(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as MeshStandardMaterial
      material.color = new Color(hovered ? "#ff00ff" : "#00f0ff")
    }
  }, [hovered])

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[1.5, 1.5, 1.5, 1, 1, 1]} />
      <meshStandardMaterial color="#00f0ff" metalness={0.8} roughness={0.2} wireframe />
    </mesh>
  )
}

function FloatingText() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[0, -2, 0]}>
      <Text3D font="/fonts/Geist_Bold.json" size={0.5} height={0.1} curveSegments={12}>
        BLOCKCHAIN
        <meshStandardMaterial color="#8a2be2" metalness={0.8} roughness={0.2} />
      </Text3D>
    </Float>
  )
}

export default function HeroSection() {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state to true after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-light text-gray-400">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-glow">
              <span className="text-gradient">Rantu Thakuria</span>
            </h1>
            <h3 className="text-xl md:text-3xl font-medium text-gray-300">Python Developer & Blockchain Specialist</h3>
          </div>

          <p className="text-gray-400 text-lg max-w-lg">
            Building innovative solutions at the intersection of Python development and blockchain technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="cyber-button">View Projects</Button>
            <Button variant="outline" className="cyber-button">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[400px] md:h-[500px]"
        >
          {/* Only render Canvas when component is mounted to avoid hydration issues */}
          {isMounted && (
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <CubeModel />
              <FloatingText />
              <Environment preset="night" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  )
}

