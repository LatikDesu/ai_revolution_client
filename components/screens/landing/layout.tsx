import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
	className?: string
}

export function Background() {
	return (
		<Image
			alt='Mountains'
			src='/background.png'
			priority
			quality={100}
			fill
			sizes='80vw'
			style={{
				objectFit: 'cover',
			}}
		/>
	)
}

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
	return (
		<>
			<Background />
			<div
				className={`w-full min-h-full inline-block z-0  px-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
			>
				{children}
			</div>
		</>
	)
}

export default Layout
