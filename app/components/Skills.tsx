'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Skills() {
	const [activeTab, setActiveTab] = useState('advanced')

	const skills = {
		advanced: [
			{ name: 'Next.js', level: 90, bg: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white' },
			{ name: 'React.js', level: 85, bg: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' },
			{ name: 'TailwindCSS', level: 83, bg: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white' },
			{ name: 'FSD', level: 85, bg: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white' },
			{ name: 'Zustand', level: 88, bg: 'bg-gradient-to-r from-orange-400 to-yellow-500 text-white' },
			{ name: 'Redux', level: 81, bg: 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white' },
			{ name: 'JavaScript', level: 95, bg: 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-black' },
			{ name: 'TypeScript', level: 82, bg: 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' },
			{ name: 'Figma', level: 85, bg: 'bg-gradient-to-r from-pink-500 to-red-500 text-white' },
			{ name: 'Radix UI', level: 87, bg: 'bg-gradient-to-r from-teal-400 to-green-500 text-white' },
			{ name: 'ООП', level: 82, bg: 'bg-gradient-to-r from-gray-500 to-gray-700 text-white' },
			{ name: 'SOLID', level: 78, bg: 'bg-gradient-to-r from-red-600 to-red-800 text-white' },
		],
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	}

	return (
		<section id='skills' className='py-5'>
			<motion.h2
				className='text-3xl font-bold text-center mb-8 text-white'
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				Навыки
			</motion.h2>
			<Card className='bg-gray-800/50  backdrop-blur-lg'>
				<CardContent className='p-6'>
					<Tabs defaultValue='advanced' className='w-full'>
						<TabsContent value='advanced'>
							<motion.div
								className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
								variants={containerVariants}
								initial='hidden'
								animate='visible'
							>
								{skills.advanced.map((skill, index) => (
									<motion.div key={index} variants={itemVariants}>
										<SkillBadge
											name={skill.name}
											level={skill.level}
											bg={skill.bg}
										/>
									</motion.div>
								))}
							</motion.div>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</section>
	)
}

function SkillBadge({ name, level, bg }: { name: string; level: number; bg: string | undefined }) {
	return (
		<Badge
			variant='outline'
			className={`${bg || 'bg-gray-200'} flex items-center justify-between w-full p-2 text-sm font-medium`}
		>
			<span>{name}</span>
			<span className='ml-2 text-xs font-normal'>{level}%</span>
		</Badge>
	)
}