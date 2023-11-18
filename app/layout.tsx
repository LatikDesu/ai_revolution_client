import { Footer, Navbar } from '@/components/common'
import { Setup } from '@/components/utils'
import Provider from '@/redux/provider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'AI Revolution',
	description: 'AI Revolution application',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
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
