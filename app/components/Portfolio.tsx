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
			title: 'Dental Clinic',
			description:
				'Веб приложение стоматологии, реализован полный функцинал для работы с пациентами и документацией (desktop)',
			image: '/portfolio/Dental.png',
			details: 'Ссылка не доступна, так как этот проект используется клиникой',
			technologies: [
				'NEXT.js',
				'TypeScript',
				'React Query',
				'TailwindCSS',
				'FSD',
				'RTK Query',
				'Lexical',
				'ShadcnUI',
			],
			github: '',
			live: '',
		},
		{
			title: 'Coffee Shop',
			description:
				'Пет проект, есть бекенд, есть фронтенд, динамический роутинг, выстроенная архитектура FSD (desktop / mobile)',
			image: '/portfolio/coffee.png',
			details:
				'Используется Next js (App Router), typeScript, FSD, Zustand, Tailwind CSS',
			technologies: [
				'NEXT.js',
				'TypeScript',
				'FSD',
				'Prisma',
				'ShadcnUI',
				'Zustand',
				'Tailwind CSS',
			],
			github: 'https://github.com/Korablevsky',
			live: 'https://coffee-alpha-one.vercel.app/',
		},
		{
			title: 'Lawyers',
			description:
				'Проект, поиск юристов, занимаюсь им когда есть время, планирую SEO оптимизировать, добавить динамический роутинг и настроить прод (desktop / mobile)',
			image: '/portfolio/lawyers.png',
			details:
				'Используется Next js (App Router), typeScript, FSD, Zustand, Tailwind CSS',
			technologies: [
				'NEXT.js',
				'TypeScript',
				'FSD',
				'ShadcnUI',
				'Zustand',
				'Tailwind CSS',
			],
			github: 'https://github.com/Korablevsky/lawyer',
			live: 'https://lawyer-ashen.vercel.app/',
		},
		{
			title: 'Rukiwdom',
			description:
				'Проект, по подбору мастеров по дому, настроена СЕО-оптимизация, подключен Telegram API для сбора заявок (desktop / mobile)',
			image: '/portfolio/rukiwdom.png',
			details:
				'Используется Next js (App Router), typeScript, FSD, Zustand, Tailwind CSS',
			technologies: [
				'NEXT.js',
				'TypeScript',
				'FSD',
				'Telegram API',
				'ShadcnUI',
				'Zustand',
				'Tailwind CSS',
			],
			github: 'https://github.com/Korablevsky/ruki-v-dom',
			live: 'https://ruki-v-dom.vercel.app/',
		},
		{
			title: 'RMT-development',
			description:
				'Веб приложение по поиску разработчиков. Настроена фильтрация, добавление в избранное, удаление из избранного (desktop)',
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
						className='h-full'
					>
						<Dialog>
							<DialogTrigger asChild>
								<Card className='cursor-pointer hover:shadow-lg transition-shadow overflow-hidden bg-gray-800/50 backdrop-blur-lg h-full flex flex-col'>
									<CardContent className='p-0 flex flex-col h-full'>
										<img
											src={project.image}
											alt={project.title}
											className='w-full h-48 object-cover flex-shrink-0'
										/>
										<div className='p-4 flex flex-col flex-grow'>
											<h3 className='text-lg font-semibold text-indigo-400 mb-2'>
												{project.title}
											</h3>
											<p className='text-sm text-muted-foreground mb-4 flex-grow'>
												{project.description}
											</p>
											<div className='flex flex-wrap gap-2 mt-auto'>
												{project.technologies.map((tech, i) => (
													<Badge
														key={i}
														className='bg-indigo-600/80'
														variant='secondary'
													>
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
