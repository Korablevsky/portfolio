'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, Send } from 'lucide-react'
import Link from 'next/link'

export default function About() {
	return (
		<section id='about' className='py-5 md:py-10'>
			<Card className='overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg'>
				<CardContent className='p-0'>
					<div className='flex flex-col md:flex-row items-center'>
						<motion.div
							className='w-full md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white'
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
						>
							<motion.img
								src='/avatar.jpg'
								alt='Фото профиля'
								className='rounded-full w-48 h-48 object-cover mx-auto mb-4 border-4 border-white shadow-lg'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							/>
							<motion.h1
								className='text-3xl font-bold text-center mb-2'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2, duration: 0.6 }}
							>
								Максим Кораблев
							</motion.h1>
							<motion.h2
								className='text-xl text-center mb-4'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.6 }}
							>
								Frontend Developer
							</motion.h2>
							<motion.div
								className='flex justify-center space-x-4'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								<Link href='https://github.com/Korablevsky'>
									<Button variant='ghost' size='icon'>
										<GithubIcon className='h-5 w-5' />
									</Button>
								</Link>
								<Link href="https://www.linkedin.com/in/maxim-korablev-314488298/">
									<Button variant='ghost' size='icon'>
										<LinkedinIcon className='h-5 w-5' />
									</Button>
								</Link>
								<Button variant='ghost' size='icon'>
									<Link href='https://t.me/korablevsky'>
										<Send className='h-5 w-5' />
									</Link>
								</Button>
							</motion.div>
						</motion.div>
						<motion.div className='w-full md:w-2/3 p-6'>
							<h3 className='text-2xl font-semibold mb-4'>Обо мне</h3>
							<p className='text-lg mb-4'>
								Привет! Я фронтенд-разработчик с 3x-летним опытом создания
								современных веб-приложений. Мой основной стек: React, Next.js,
								TypeScript, Redux / Zustand и Tailwind CSS. Я увлечен созданием
								красивых и функциональных пользовательских интерфейсов.
							</p>
							<p className='text-lg mb-4'>
								Я постоянно изучаю новые технологии и методологии, чтобы
								оставаться на переднем крае веб-разработки. Моя цель - создавать
								инновационные и удобные для пользователя веб-приложения, которые
								не только выглядят потрясающе, но и обеспечивают отличный
								пользовательский опыт.
							</p>
							<motion.div>
								<Button>Скачать CV</Button>
							</motion.div>
						</motion.div>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
