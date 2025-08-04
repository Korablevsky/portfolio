"use client"

import { motion } from 'framer-motion'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Services from './components/Services'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-2 space-y-5">
        <motion.div {...fadeInUp}>
          <About />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Experience />
        </motion.div>
        {/* <motion.div {...fadeInUp}>
          <Skills />
        </motion.div> */}
        <motion.div {...fadeInUp}>
          <Portfolio />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Services />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Contact />
        </motion.div>
      </div>
    </main>
  )
}

