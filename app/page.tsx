import { Layout, Navbar } from '@/components/screens/landing'
import { AnimatedText, TransitionEffect } from '@/components/utils'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'CreaCraft | Умный помощник для эффективной работы',
	description: 'CreaCraft | ChatGPT assistant',
}

export default function Page() {
	return (
		<main
			className='w-full min-h-full bg-bgcolor'
			style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}
		>
			<TransitionEffect />
			<Navbar />
			<section className='flex items-center text-white w-full min-h-screen'>
				<Layout className='pt-0 md:pt-16 sm:pt-8'>
					<div className='flex items-center justify-between w-full lg:flex-col'>
						<div className='w-1/2 md:w-full'>
							{/* <Image
								width={600}
								height={600}
								src='/MainPic.png'
								alt='PromoPic'
								sizes='100vw'
								className='w-full h-auto lg:hidden md:inline-block md:w-full'
								priority
							/> */}
						</div>
						<div className='w-1/2 flex flex-col items-start self-center lg:items-center lg:w-full lg:text-center'>
							<AnimatedText
								text='CREACRAFT ВАШ КРЕАТИВНЫЙ ПОМОЩНИК'
								className='!text-6xl !text-left xl: !text-5xl !font-beba lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl text-textlight'
							/>
							<p className='my-4 text-base text-textlight font-medium md:text-sm sm:text-xs'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio pariatur et sint facilis sed rerum labore dolor
								numquam excepturi a voluptas nulla, minima laudantium,
								exercitationem aspernatur animi repellendus dolores eligendi.
							</p>
							<div className='flex items-center self-start mt-2 lg:self-center'>
								<Link
									href='/auth/login'
									className='flex items-center bg-basepink text-light p-2.5 px-6
                         rounded-lg text-lg font-semibold hover:bg-basecyan hover:baseorange
                         border-2 border-solid border-transparent hover:baseorange md:p-2 md:px-4 md:text-base'
								>
									Начать
								</Link>
							</div>
						</div>
					</div>
				</Layout>
			</section>
		</main>
	)
}
