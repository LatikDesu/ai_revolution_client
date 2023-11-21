import { Footer, Navbar } from '@/components/common'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<section>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</section>
	)
}
