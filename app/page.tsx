"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  // Ensure we're at the top of the page on initial load
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0)

    // Handle hash links properly
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        // If there's a hash, scroll to that section
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo(0, 0)
      }
    }

    // Check for hash on initial load
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

