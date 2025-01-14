'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	BarChart,
	Briefcase,
	Cog,
	Globe,
	LayoutTemplate,
	Mail,
	Rocket,
	Search,
	ShoppingCart,
	Store,
	Users,
} from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		title: 'Landing Page',
		description:
			'Создание эффективных одностраничных сайтов для продвижения продукта или услуги',
		price: 'от 50 000 ₽',
		icon: LayoutTemplate,
		features: [
			'Адаптивный дизайн',
			'Оптимизация конверсии',
			'A/B тестирование',
		],
		schema: (
			<svg viewBox='0 0 240 200' className='w-full h-auto mb-4'>
				{/* Browser Window */}
				<rect x='20' y='10' width='200' height='180' fill='#0F172A' rx='8' />
				<rect x='20' y='10' width='200' height='25' fill='#1E293B' rx='8' />
				<circle cx='35' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='45' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='55' cy='22' r='3' fill='#7DD3FC' />

				{/* Content Sections */}
				<rect x='35' y='45' width='170' height='50' fill='#7DD3FC' rx='4' />
				<rect x='50' y='60' width='140' height='20' fill='white' rx='4' />

				<rect x='35' y='105' width='170' height='40' fill='#0F172A' rx='4' />
				<rect x='45' y='105' width='70' height='6' fill='#7DD3FC' />
				<rect x='45' y='115' width='150' height='6' fill='#7DD3FC' />

				<rect x='35' y='135' width='170' height='45' fill='#7DD3FC' rx='4' />

				{/* Rocket */}
			</svg>
		),
	},
	{
		title: 'Сайт-визитка',
		description:
			'Разработка компактных информативных сайтов для представления бизнеса или персоны',
		price: 'от 40 000 ₽',
		icon: Briefcase,
		features: [
			'До 5 страниц',
			'Форма обратной связи',
			'Интеграция с соцсетями',
		],
		schema: (
			<svg viewBox='0 0 240 200' className='w-full h-auto mb-4'>
				{/* Browser Window */}
				<rect x='20' y='10' width='200' height='180' fill='#0F172A' rx='8' />
				<rect x='20' y='10' width='200' height='25' fill='#1E293B' rx='8' />
				<circle cx='35' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='45' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='55' cy='22' r='3' fill='#7DD3FC' />

				{/* Content Sections */}
				<rect x='35' y='45' width='170' height='40' fill='#7DD3FC' rx='4' />
				<g transform='translate(45, 55) scale(0.7)'>
					<Rocket className='w-8 h-8 text-gray-900' />
					<rect x='40' y='5' width='80' height='8' fill='#0F172A' />
					<rect x='40' y='20' width='60' height='8' fill='#0F172A' />
				</g>

				<rect x='35' y='95' width='170' height='40' fill='#7DD3FC' rx='4' />
				<g transform='translate(45, 105) scale(0.7)'>
					<Cog className='w-8 h-8 text-gray-900' />
					<rect x='40' y='5' width='80' height='8' fill='#0F172A' />
					<rect x='40' y='20' width='60' height='8' fill='#0F172A' />
				</g>

				<rect x='35' y='145' width='170' height='40' fill='#7DD3FC' rx='4' />
				<g transform='translate(45, 155) scale(0.7)'>
					<Mail className='w-8 h-8 text-gray-900' />
					<rect x='40' y='5' width='80' height='8' fill='#0F172A' />
					<rect x='40' y='20' width='60' height='8' fill='#0F172A' />
				</g>
			</svg>
		),
	},
	{
		title: 'Корпоративный сайт',
		description:
			'Создание полноценного веб-представительства для компаний любого масштаба',
		price: 'от 150 000 ₽',
		icon: Globe,
		features: ['Многостраничный сайт', 'Админ-панель', 'Корпоративный блог'],
		schema: (
			<svg viewBox='0 0 240 200' className='w-full h-auto mb-4'>
				{/* Browser Window */}
				<rect x='20' y='10' width='200' height='180' fill='#0F172A' rx='8' />
				<rect x='20' y='10' width='200' height='25' fill='#1E293B' rx='8' />
				<circle cx='35' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='45' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='55' cy='22' r='3' fill='#7DD3FC' />

				{/* Navigation */}
				<rect x='35' y='45' width='170' height='20' fill='#7DD3FC' rx='4' />
				<rect x='45' y='50' width='20' height='8' fill='#0F172A' />
				<rect x='75' y='50' width='20' height='8' fill='#0F172A' />
				<rect x='105' y='50' width='20' height='8' fill='#0F172A' />
				<rect x='135' y='50' width='20' height='8' fill='#0F172A' />
				<Users size={17} className='w-3 h-3 text-gray-900' x='180' y='46' />

				{/* Content Sections */}
				<rect x='35' y='75' width='105' height='80' fill='#7DD3FC' rx='4' />
				<rect x='150' y='75' width='55' height='80' fill='#7DD3FC' rx='4' />
				<rect x='35' y='165' width='170' height='20' fill='#7DD3FC' rx='4' />
			</svg>
		),
	},
	{
		title: 'Интернет-витрина',
		description:
			'Разработка онлайн-каталога товаров или услуг без функции онлайн-покупки',
		price: 'от 100 000 ₽',
		icon: Store,
		features: ['Каталог товаров', 'Фильтрация и поиск', 'Интеграция с CRM'],
		schema: (
			<svg viewBox='0 0 240 200' className='w-full h-auto mb-4'>
				{/* Browser Window */}
				<rect x='20' y='10' width='200' height='180' fill='#0F172A' rx='8' />
				<rect x='20' y='10' width='200' height='25' fill='#1E293B' rx='8' />
				<circle cx='35' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='45' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='55' cy='22' r='3' fill='#7DD3FC' />

				{/* Search Bar */}
				<rect x='35' y='45' width='170' height='20' fill='#7DD3FC' rx='4' />
				<rect x='45' y='50' width='120' height='10' fill='#0F172A' rx='4' />
				<Search size={15} className='w-5 h-5 text-gray-900' x='185' y='48' />

				{/* Grid of Products */}
				<rect x='35' y='75' width='80' height='50' fill='#7DD3FC' rx='4' />
				<rect x='125' y='75' width='80' height='50' fill='#7DD3FC' rx='4' />
				<rect x='35' y='135' width='80' height='50' fill='#7DD3FC' rx='4' />
				<rect x='125' y='135' width='80' height='50' fill='#7DD3FC' rx='4' />
			</svg>
		),
	},
	{
		title: 'Интернет-магазин',
		description:
			'Создание полнофункционального онлайн-магазина с возможностью оформления заказов',
		price: 'от 250 000 ₽',
		icon: ShoppingCart,
		features: [
			'Каталог товаров',
			'Корзина и оформление заказа',
			'Интеграция с платежными системами',
		],
		schema: (
			<svg viewBox='0 0 240 200' className='w-full h-auto mb-4'>
				{/* Browser Window */}
				<rect x='20' y='10' width='200' height='180' fill='#0F172A' rx='8' />
				<rect x='20' y='10' width='200' height='25' fill='#1E293B' rx='8' />
				<circle cx='35' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='45' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='55' cy='22' r='3' fill='#7DD3FC' />

				{/* Header with Cart */}
				<rect x='35' y='45' width='170' height='20' fill='#7DD3FC' rx='4' />
				<ShoppingCart
					size={15}
					className='w-5 h-5 text-gray-900'
					x='185'
					y='48'
				/>

				{/* Product Grid */}
				<rect x='35' y='75' width='170' height='85' fill='#7DD3FC' rx='4' />
				<rect x='45' y='80' width='70' height='35' fill='#0F172A' rx='4' />
				<rect x='125' y='80' width='70' height='35' fill='#0F172A' rx='4' />
				<rect x='45' y='120' width='70' height='35' fill='#0F172A' rx='4' />
				<rect x='125' y='120' width='70' height='35' fill='#0F172A' rx='4' />

				{/* Checkout Button */}
				<rect x='35' y='165' width='170' height='20' fill='#7DD3FC' rx='4' />
				<rect x='65' y='170' width='110' height='10' fill='#0F172A' rx='2' />
			</svg>
		),
	},
	{
		title: 'Веб-портал',
		description: 'Разработка крупных информационных систем и порталов',
		price: 'от 500 000 ₽',
		icon: Globe,
		features: [
			'Сложная архитектура',
			'Высокая нагрузка',
			'Множество интеграций',
		],
		schema: (
			<svg viewBox='0 0 240 200' className='w-full h-auto mb-4'>
				{/* Browser Window */}
				<rect x='20' y='10' width='200' height='180' fill='#0F172A' rx='8' />
				<rect x='20' y='10' width='200' height='25' fill='#1E293B' rx='8' />
				<circle cx='35' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='45' cy='22' r='3' fill='#7DD3FC' />
				<circle cx='55' cy='22' r='3' fill='#7DD3FC' />

				{/* Complex Layout */}
				<rect x='35' y='45' width='40' height='140' fill='#7DD3FC' rx='4' />
				<rect x='85' y='45' width='120' height='65' fill='#7DD3FC' rx='4' />
				<rect x='85' y='120' width='120' height='65' fill='#7DD3FC' rx='4' />

				{/* Icons */}
				<g transform='translate(45, 55) scale(0.7)'>
					<Users className='w-6 h-6 text-gray-900' />
					<Search className='w-6 h-6 text-gray-900' y='40' />
					<BarChart className='w-6 h-6 text-gray-900' y='100' />
					<Mail className='w-6 h-6 text-gray-900' y='140' />
				</g>

				{/* Content Indicators */}
				<rect x='95' y='55' width='100' height='4' fill='#0F172A' />
				<rect x='95' y='65' width='80' height='4' fill='#0F172A' />
				<rect x='95' y='130' width='100' height='4' fill='#0F172A' />
				<rect x='95' y='140' width='80' height='4' fill='#0F172A' />
			</svg>
		),
	},
]

export default function Services() {
	return (
		<section id='services' className='py-5'>
			<motion.h2
				className='text-3xl font-bold text-center mb-8 text-white'
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				Услуги по разработке веб-сайтов
			</motion.h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<motion.div
						key={index}
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Card className='h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg hover:shadow-lg transition-shadow'>
							<CardHeader className=' p-3 px-5 flex flex-row gap-3'>
								<div className='w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center '>
									<service.icon className='w-6 h-6 text-purple-600 dark:text-purple-400' />
								</div>
								<CardTitle className='text-xl mb-2'>{service.title}</CardTitle>
							</CardHeader>
							<CardContent className='flex flex-col '>
								{service.schema}
								<p className='mb-4 text-gray-600 dark:text-gray-400'>
									{service.description}
								</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{service.features.map((feature, i) => (
										<Badge key={i} variant='secondary'>
											{feature}
										</Badge>
									))}
								</div>
								<div className='flex items-center justify-between '>
									<span className='text-lg font-bold text-purple-600 dark:text-purple-400'>
										{service.price}
									</span>
									<Button variant='outline'>
										<Link href='https://t.me/korablevsky'>Заказать</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	)
}
