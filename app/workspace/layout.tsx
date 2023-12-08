'use client'

import { RequireAuth } from '@/components/utils'
import { Sidebar } from '@/components/workspace'
import { QueryClient } from 'react-query'

import styles from './Workspace.module.css'

interface Props {
	children: React.ReactNode
}

const queryClient = new QueryClient()

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
