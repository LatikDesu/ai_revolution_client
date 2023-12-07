import { Navbar } from '@/components/screens/landing'
import { TransitionEffect } from '@/components/utils'
import Image from 'next/image'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<main
			className='absolute w-full min-h-full inline-block z-0 px-32 xl:p-24 lg:p-16 md:p-12 sm:p-8'
			style={{
				overflowY: 'auto',
				maxHeight: 'calc(100vh - 100px)',
			}}
		>
			<Image
				src='/bg.webp'
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
			{children}
		</main>
	)
}
