'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react'

export default function Experience() {
	const experiences = [
		{
			company: 'MEDLINE',
			position: 'Frontend Developer',
			period: '2025 - по настоящее время',
			achievements: [
				'Разработал и оптимизировал UI/UX веб-приложения с использованием Next.js, TailwindCSS и Radix UI/Shadcn',
				'Сократил время загрузки страниц на 25% за счёт оптимизации рендеринга и внедрения SSR',
				'Создал динамические интерфейсы и кастомные UI-компоненты для интуитивного UX',
				'Интегрировал REST API, снизил нагрузку на сервер на 15%',
				'Настроил управление состоянием с TanStack Query, сократил время загрузки данных на 30%',
				'Провёл рефакторинг legacy-кода с внедрением Feature-Sliced Design (FSD)',
				'Ускорил разработку новых фич на 20% и упростил поддержку кода',
			],
			note: 'Проект конфиденциален, готов продемонстрировать и обсудить детали на собеседовании.',
		},
		{
			company: 'VTB',
			position: 'Frontend Developer',
			period: '2021 - 2025',
			achievements: [
        'Разрабатывал интерфейсы на React и TypeScript с использованием Redux Toolkit, оптимизировал рендеринг компонентов, сократив время загрузки на 15%.',

        'Реализовал адаптивную верстку по макетам Figma, применяя styled-components и BEM, обеспечив 100% соответствие дизайну и кроссбраузерную совместимость.',
        
        'Интегрировал приложение с REST и GraphQL API, обеспечив стабильное взаимодействие с бэкендом.',      
        
        'Провёл рефакторинг 80% legacy-кода, переведя классовые компоненты на функциональные с хуками, что ускорило разработку новых функций на 25%.',
        
        'Сотрудничал с дизайнерами в проектировании UI/UX, улучшив пользовательские сценарии на основе обратной связи.',
        
        'Внедрил 20+ компонентов в дизайн-систему, сократив время разработки интерфейсов на 30%.',
        
        'Настроил CI/CD в GitLab CI, автоматизировав деплой и сократив время доставки кода на 40%.',
        
        'В разработке были несколько проектов для внутреннего пользования, могу рассказать о них подробнее на собеседовании',
			],
      note: 'Проект конфиденциален, готов продемонстрировать и обсудить детали на собеседовании.',
		},
		{
			company: 'Обучение',
			position: 'Student',
			period: '2020 - по настоящее время',
			achievements: [
				'Постоянно совершенствуюсь в разработке на React, TypeScript, Next.js, TailwindCSS, ShadcnUI, FSD',
        'Ищу подходы к разработке, который позволит мне быть эффективным и продуктивным',
        'Планирую изучать React Native для мобильной разработки',
        'Интерес к технологиям AI',
        'Возможно буду изучать Web3 и блокчейн технологий',
			],
		},
	]

	return (
		<section id='experience' className='py-5'>
			<motion.h2
				className='text-3xl font-bold text-center mb-8 text-white'
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				Опыт работы
			</motion.h2>
			<div className='space-y-6'>
				{experiences.map((exp, index) => (
					<motion.div
						key={index}
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
					>
						<Card className='hover:shadow-lg transition-shadow bg-gray-800/50 backdrop-blur-lg'>
							<CardContent className='p-6'>
								<div className='flex items-center mb-4'>
									<BriefcaseIcon className='h-6 w-6 mr-2 text-indigo-500' />
									<h3 className='text-xl font-semibold text-white'>
										{exp.company}
									</h3>
								</div>

								<p className='text-lg font-medium mb-2 text-indigo-300'>
									{exp.position}
								</p>

								<div className='flex items-center mb-4 text-muted-foreground'>
									<CalendarIcon className='h-4 w-4 mr-2' />
									<p className='text-sm'>{exp.period}</p>
								</div>

								<div className='space-y-2'>
									<h4 className='font-medium text-gray-300 mb-3'>
										Ключевые достижения:
									</h4>
									<ul className='space-y-2'>
										{exp.achievements.map((achievement, achievementIndex) => (
											<li key={achievementIndex} className='flex gap-2 items-center'>
												<span className='text-indigo-500  '>
													•
												</span>
												<span className='text-muted-foreground text-sm leading-relaxed'>
													{achievement}
												</span>
											</li>
										))}
									</ul>
									{exp.note && (
										<div className='mt-4 p-3 bg-gray-700/50 rounded-lg'>
											<p className='text-xs text-gray-400 italic'>{exp.note}</p>
										</div>
									)}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	)
}
