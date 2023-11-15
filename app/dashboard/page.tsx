'use client'

import { List, Spinner } from '@/components/common'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'

export default function Page() {
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery()

	const config = [
		{
			label: 'Username',
			value: String(user?.username),
		},
		{
			label: 'First Name',
			value: String(user?.first_name),
		},
		{
			label: 'Last Name',
			value: String(user?.last_name),
		},
		{
			label: 'Email',
			value: String(user?.email),
		},
		{
			label: 'gpt3_tokens',
			value: String(user?.gpt3_tokens || 0),
		},
		{
			label: 'gpt4_tokens',
			value: String(user?.gpt4_tokens || 0),
		},
	]

	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		)
	}

	return (
		<>
			<header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						Dashboard
					</h1>
				</div>
			</header>
			<main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
				<List config={config} />
			</main>
		</>
	)
}
