'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, Send } from 'lucide-react'
import Link from 'next/link'

export default function About() {
	return (
		<section id='about' className='py-5 md:py-10'>
			<Card className='overflow-hidden bg-gray-800/50 backdrop-blur-lg'>
				<CardContent className='p-0'>
					<div className='flex flex-col md:flex-row md:items-stretch'>
						<motion.div
							className='w-full  md:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-white'
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
								className='text-xl text-center mb-2'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3, duration: 0.6 }}
							>
								Frontend Developer
							</motion.h2>
							<motion.div
								className='flex justify-center space-x-4 mb-2'
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								<Link href='https://github.com/Korablevsky'>
									<Button variant='ghost' size='icon'>
										<GithubIcon className='h-5 w-5' />
									</Button>
								</Link>
								<Link href='https://www.linkedin.com/in/maxim-korablev-314488298/'>
									<Button variant='ghost' size='icon'>
										<LinkedinIcon className='h-5 w-5' />
									</Button>
								</Link>
								<Button variant='ghost' size='icon' asChild>
									<Link href='https://t.me/korablevsky'>
										<Send className='h-5 w-5' />
									</Link>
								</Button>
							</motion.div>
							<motion.div>
								<Button asChild>
									<Link
										className='w-full'
										href='/resume.pdf'
										target='_blank'
									>
										Скачать CV
									</Link>
								</Button>
							</motion.div>
						</motion.div>
						<motion.div className='w-full md:w-2/3 p-6'>
							<h3 className='text-2xl font-semibold mb-4'>Обо мне</h3>
							<p className='text-lg mb-4'>
								Привет! Я фронтенд-разработчик с 4-летним опытом создания
								современных веб-приложений. Специализируюсь на React-экосистеме
								и создании интуитивных пользовательских интерфейсов.
							</p>
							<div className='flex flex-col md:flex-row gap-6'>
								<div className='flex-1'>
									<span className='font-bold text-indigo-500 text-lg block mb-3'>
										Мой основной стек:
									</span>
									<ul className='space-y-1 text-gray-300'>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											React / NEXT.js
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											JavaScript / TypeScript
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											FSD
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											RTK Query / Zustand
										</li>
										<li >
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											tanStack Query
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											ShadcnUI
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											Tailwind CSS
										</li>
									</ul>
								</div>
								<div className='flex-1'>
									<span className='font-bold text-indigo-500 text-lg block mb-3'>
										Дополнительные навыки:
									</span>
									<ul className='space-y-1 text-gray-300'>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											Lexical
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											Material UI
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											HeroUI
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											Git
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											Axios
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											React Hook Form
										</li>
										<li>
											<span className='text-indigo-500 mr-2 mt-1'>•</span>
											React Router
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
