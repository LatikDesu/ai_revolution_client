import { Navbar } from '@/components/common'
import { TransitionEffect } from '@/components/utils'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
	className?: string
}

const FormsScreensLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<main
			className='absolute w-full min-h-full inline-block z-0 px-32 xl:p-24 lg:p-16 md:p-12 sm:p-8'
			style={{
				overflowY: 'auto',
				maxHeight: 'calc(100vh - 100px)',
			}}
		>
			<Image
				src='/bg-xl.jpg'
				alt='Background'
				fill
				priority
				sizes='100vw'
				style={{
					objectFit: 'cover',
				}}
				className='-z-10'
			/>
			<TransitionEffect />
			<Navbar />
			<section className='flex items-center w-full min-h-screen'>
				<div className='flex w-full h-min-screen pt-0 md:pt-16 sm:pt-8 '>
					<div className='w-1/2 md:hidden' />
					<div className='mx-auto bg-bgform rounded-lg shadow-lg shadow-basecyan'>
						{children}
					</div>
				</div>
			</section>
		</main>
	)
}

export default FormsScreensLayout
