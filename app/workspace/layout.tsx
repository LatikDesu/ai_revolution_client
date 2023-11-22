'use client'

import { RequireAuth } from '@/components/utils'
import { Sidebar } from '@/components/workspace'
import { QueryClient, QueryClientProvider } from 'react-query'

import styles from './Workspace.module.css'

interface Props {
	children: React.ReactNode
}

const queryClient = new QueryClient()

export default function Layout({ children }: Props) {
	return (
		<section className={styles.layout}>
			<RequireAuth>
				<QueryClientProvider client={queryClient}>
					<Sidebar />
					<div>{children}</div>
				</QueryClientProvider>
			</RequireAuth>
		</section>
	)
}
