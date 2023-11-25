import { Navbar } from '@/components/screens/landing'
import { TransitionEffect } from '@/components/utils'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<section className='w-full min-h-full bg-basecolor'>
			<TransitionEffect />
			<Navbar />
			{children}
		</section>
	)
}
