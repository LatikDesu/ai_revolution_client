import { Footer, Navbar } from '@/components/common'
import { Setup } from '@/components/utils'
import Provider from '@/redux/provider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'CreaCraft',
	description: 'AI Revolution application',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={openSans.className}>
				<Provider>
					<Setup />
					<Navbar />
					<div>{children}</div>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
