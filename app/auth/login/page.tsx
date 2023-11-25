import { LoginFormPage } from '@/components/screens/auth'
import { Layout } from '@/components/screens/landing'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'CreaCraft | Вход',
	description: 'CreaCraft login page',
}

export default function Page() {
	return (
		<main
			className='flex items-center text-white w-full min-h-screen'
			style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}
		>
			<Layout className='pt-0 md:pt-16 sm:pt-8'>
				<div
					className='grid grid-cols-2  md:grid-cols-1 md:gap-y-8 rounded-2xl shadow-2xl shadow-basecyan
                    items-center text-center 
                    '
				>
					<div
						className='bg-basecolor text-light rounded-tl-2xl rounded-bl-2xl py-36 px-12 md:py-12 md:px-8 h-full
                    md:rounded-tr-none md:rounded-bl-2xl'
					>
						<h2 className='text-3xl font-bold mb-2'>Приветсвую!</h2>
						<div className='border-2 w-10 border-light inline-block mb-2'></div>
						<p className='mb-10'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
							quos, esse minus ab error impedit enim amet asperiores
							reprehenderit exercitationem culpa inventore veritatis laboriosam,
							quae ad assumenda tempora illo deleniti.
						</p>
					</div>
					<div className='px-5 w-full h-full bg-white rounded-tr-2xl rounded-br-2xl'>
						<LoginFormPage />
					</div>
				</div>
			</Layout>
		</main>
	)
}
