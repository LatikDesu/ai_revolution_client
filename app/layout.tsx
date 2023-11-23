import { Setup } from '@/components/utils'
import Provider from '@/redux/provider'
import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open',
})
const bebaNeue = Bebas_Neue({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-beba',
})

export const metadata: Metadata = {
	title: 'CreaCraft',
	description: 'AI Revolution application',
}

export const viewport: Viewport = {
	themeColor: '#001324',
	colorScheme: 'light',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={`${openSans.variable} ${bebaNeue.variable}`}>
				<Provider>
					<Setup />
					{children}
				</Provider>
			</body>
		</html>
	)
}
