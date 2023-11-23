import { Layout, Navbar } from '@/components/screens/landing'
import styles from '@/components/screens/landing/Landing.module.css'
import { AnimatedText, TransitionEffect } from '@/components/utils'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'CreaCraft | Умный помощник для эффективной работы',
	description: 'CreaCraft | ChatGPT assistant',
}

export default function Page() {
	return (
		<main className={`w-full min-h-screen ${styles.container}`}>
			<TransitionEffect />
			<Navbar />
			<section className='flex items-center text-white w-full min-h-screen'>
				<Layout className='pt-0 md:pt-16 sm:pt-8'>
					<div className='flex items-center justify-between w-full lg:flex-col'>
						<div className='w-1/2 flex flex-col items-start self-center lg:items-center lg:w-full lg:text-center'>
							<AnimatedText
								text='CREACRAFT ВАШ КРЕАТИВНЫЙ ПОМОЩНИК'
								className='!text-6xl !text-left xl: !text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
							/>
							<p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
								Генерируй статьи, рекламные креативы и многое другое с нуля
							</p>
							<div className='flex items-center self-start mt-2 lg:self-center'>
								<Link
									href='/login'
									className='flex items-center bg-baseorange text-light p-2.5 px-6
                         rounded-lg text-lg font-semibold hover:bg-light hover:baseorange
                         border-2 border-solid border-transparent hover:baseorange md:p-2 md:px-4 md:text-base'
								>
									Начать
								</Link>
							</div>
						</div>
						<div className='w-1/2 md:w-full'>
							<Image
								width={300}
								height={300}
								src='/MainPic.png'
								alt='PromoPic'
								className='w-full h-auto lg:hidden md:inline-block md:w-full'
								priority
								sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
							/>
						</div>
					</div>
				</Layout>
			</section>
		</main>
	)
}

{
	/* <div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
							Умный помощник для эффективной работы!
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Мы инновационный сервис, предназначенный для совместной работы с
							генеративными чат-ботами на основе модели GPT . Наш помощник
							поможет вам максимизировать эффективность и результативность
							использования таких ботов в различных процессах бизнеса.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<Link
								href='/auth/login'
								className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Войдите
							</Link>
							<Link
								href='/auth/registration'
								className='text-sm font-semibold leading-6 text-gray-900'
							>
								или создайте аккаунт <span aria-hidden='true'>&rarr;</span>
							</Link>
						</div>
					</div>
				</div>
			</div> */
}
