import { FC, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
	className?: string
}

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
	return (
		<>
			<div className={`${className}`}>{children}</div>
		</>
	)
}

export default Layout
