import { RegFormPage } from '@/components/screens/auth'
import { Layout } from '@/components/screens/landing'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'CreaCraft | Регистрация',
	description: 'Сreate your account on CreaCraft',
}

export default function Page() {
	return (
		<section className='flex items-center w-full min-h-screen'>
			<Layout className='flex w-full h-min-screen pt-0 md:pt-16 sm:pt-8 '>
				<div className='w-1/2 md:hidden' />
				<div className='mx-auto bg-bgform rounded-lg shadow-lg shadow-basecyan'>
					<RegFormPage />
				</div>
			</Layout>
		</section>
	)
}
