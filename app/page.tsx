import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'AI Revolution | Home',
	description: 'AI Revolution home page',
}

export default function Page() {
	return (
		<main className='bg-white'>
			<div className='relative isolate px-6 pt-14 lg:px-8'>
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
			</div>
		</main>
	)
}
