import { RequireAuth } from '@/components/utils'
import { Sidebar } from '@/components/workspace'

import styles from './Workspace.module.css'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<section className={styles.layout}>
			<RequireAuth>
				<Sidebar />
				<div>{children}</div>
			</RequireAuth>
		</section>
	)
}
