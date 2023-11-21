import { Footer, Navbar } from '@/components/common'
import { RequireAuth } from '@/components/utils'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<section>
			<Navbar />
			<RequireAuth>{children}</RequireAuth>
			<Footer />
		</section>
	)
}
