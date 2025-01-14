"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "Dental - Front",
      position: "Junior Frontend Developer",
      period: "2023 - по настоящее время",
      description: "Разработка и поддержка крупномасштабных веб-приложений с использованием React и Next.js."
    },
    {
      company: "Freelance",
      position: "Freelancer",
      period: "2023 -  по настоящее время",
      description: "Поддержка и разработка веб приложений на React / Next.js"
    },
    {
      company: "Purple School",
      position: "Student",
      period: "2023 -  2023",
      description: "Разработка и поддержка крупномасштабных веб-приложений с использованием React и Next.js."
    },
    {
      company: "Udemy",
      position: "Student",
      period: "2022 - 2023",
      description: "Обучение на React"
    },
    {
      company: "Stepik",
      position: "Student",
      period: "2022 - 2022",
      description: "Обучался основам верстки и программирования"
    }
  ]

  return (
    <section id="experience" className="py-5">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Опыт работы
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-6 w-6 mr-2 text-purple-500" />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>
                <p className="text-lg font-medium mb-2">{exp.position}</p>
                <div className="flex items-center mb-4 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <p className="text-sm">{exp.period}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

