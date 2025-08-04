'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { MailIcon, MapPinIcon, PhoneIcon, Send } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
	return (
		<section id='contact' className='py-5'>
			<motion.h2
				className='text-3xl font-bold text-center mb-8 text-white'
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				Связаться со мной
			</motion.h2>
			<Card className='bg-gray-800/50  backdrop-blur-lg'>
				<CardContent className='p-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
						>
							<h3 className='text-xl font-semibold mb-4'>
								Контактная информация
							</h3>
							<div className='space-y-4'>
								<Link
									href='mailto:korablev.m56@gmail.com'
									className='flex items-center'
								>
									<MailIcon className='h-5 w-5 mr-2 text-indigo-500' />
									<span>korablev.m56@gmail.com</span>
								</Link>
								<Link
									className='flex items-center'
									href='https://t.me/korablevsky'
								>
									<Send className='h-5 w-5 mr-2 text-indigo-500' />
									<span>Telegram</span>
								</Link>
								<Link href='tel:+79534574099' className='flex items-center'>
									<PhoneIcon className='h-5 w-5 mr-2 text-indigo-500' />
									<span>+7 (953) 457-40-99</span>
								</Link>
								<div className='flex items-center'>
									<MapPinIcon className='h-5 w-5 mr-2 text-indigo-500' />
									<span>Россия</span>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
						></motion.div>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
