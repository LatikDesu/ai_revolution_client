import { FC, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
	className?: string
}

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
	return (
		<div
			className={`w-full h-full inline-block z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
		>
			{children}
		</div>
	)
}

export default Layout
