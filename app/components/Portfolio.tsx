'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import { useState } from 'react'

export default function Portfolio() {
	const [selectedProject, setSelectedProject] = useState(null)

	const projects = [
		{
			title: 'Coffee Shop',
			description:
				'Веб приложение для продажи кофе, можно фильтровать по странам и сортам, делать поиск. (desktop / mobile)',
			image: '/portfolio/coffee.png',
			details:
				'Используется Next js (App Router), typeScript, FSD, Zustand, Tailwind CSS',
			technologies: [
				'Next js (App Router)',
				'typeScript',
				'FSD',
				'Zustand',
				'Tailwind CSS',
			],
			github: 'https://github.com/Korablevsky',
			live: 'https://coffee-alpha-one.vercel.app/',
		},
		{
			title: 'RMT-development',
			description:
				'Веб приложение по поиску разработчиков (desktop). Настроена фильтрация, добавление в избранное, удаление из избранного',
			image: '/portfolio/rmt-dev.png',
			details: 'Разработан с использованием React + TypeScript + Context',
			technologies: ['React', 'TypeScript', 'Context', 'Radix UI'],
			github: 'https://github.com/Korablevsky/rmtDev',
			live: 'https://rmt-dev.vercel.app',
		},
		{
			title: 'Marvel App',
			description:
				'Приложение для любителей Marvel, можно узнать больше о персонажах и их историях',
			image: '/portfolio/marvel.png',
			details:
				'Создано с помощью React и React Beautiful DnD для плавного перетаскивания задач.',
			technologies: ['React', 'TypeScript', 'SASS'],
			github: 'https://github.com/Korablevsky/marvel_react',
			live: 'https://marvel-react-gold.vercel.app',
		},
		{
			title: 'Ruby Home',
			description:
				'Прилодение для продажи квартир. Фунционал убран, так как это демо версия (desktop / mobile)',
			image: '/portfolio/ruby-home.png',
			details: 'Используется Next js, typeScript, tailwind CSS, prisma',
			technologies: ['Next js', 'TypeScript', 'tailwind CSS', 'prisma'],
			github: 'https://github.com/Korablevsky/ruby-home',
			live: 'https://ruby-home-nine.vercel.app/',
		},
		{
			title: 'Uber Eats',
			description: 'Веб приложение для заказа еды. (desktop / mobile)',
			image: '/portfolio/uber.png',
			details: 'Сделан без использования фреймворков',
			technologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
			github: 'https://github.com/Korablevsky/restorans',
			live: 'https://korablevsky.github.io/restorans/',
		},
		{
			title: 'Dental Clinic',
			description:
				'Сложное веб приложение для клиники, можно записаться на прием, перенести на другой день, удалить запись и так далее (desktop)',
			image: '/portfolio/Dental.png',
			details: 'Ссылка не доступна, так как этот проект используется клиникой',
			technologies: ['Nextjs', 'typeScript', 'Tailwind CSS', 'FSD', 'Redux'],
			github: '',
			live: '',
		},
	]

	return (
		<section id='portfolio' className='py-5'>
			<motion.h2
				className='text-3xl font-bold text-center mb-8 text-white'
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				Портфолио
			</motion.h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
					>
						<Dialog>
							<DialogTrigger asChild>
								<Card className='cursor-pointer hover:shadow-lg transition-shadow overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg'>
									<CardContent className='p-0'>
										<img
											src={project.image}
											alt={project.title}
											className='w-full h-48 object-cover'
										/>
										<div className='p-4'>
											<h3 className='text-lg font-semibold mb-2'>
												{project.title}
											</h3>
											<p className='text-sm text-muted-foreground mb-4'>
												{project.description}
											</p>
											<div className='flex flex-wrap gap-2'>
												{project.technologies.map((tech, i) => (
													<Badge key={i} variant='secondary'>
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</DialogTrigger>
							<DialogContent className='sm:max-w-[625px]'>
								<DialogHeader>
									<DialogTitle>{project.title}</DialogTitle>
									<DialogDescription>{project.details}</DialogDescription>
								</DialogHeader>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-auto object-cover rounded-md mb-4'
								/>
								<div className='flex justify-between'>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center hover:text-purple-600 transition-colors'
									>
										<GithubIcon className='mr-2' /> GitHub
									</a>
									<a
										href={project.live}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center hover:text-purple-600 transition-colors'
									>
										<ExternalLinkIcon className='mr-2' /> Live Demo
									</a>
								</div>
							</DialogContent>
						</Dialog>
					</motion.div>
				))}
			</div>
		</section>
	)
}
