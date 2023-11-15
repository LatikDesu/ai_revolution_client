import { SocialButtons } from '@/components/common'
import { RegisterForm } from '@/components/forms'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'AI Revolution | Registration',
	description: 'AI Revolution registration page',
}

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<img
					className='mx-auto h-10 w-auto'
					src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
					alt='AI Revolution logo'
				/>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Регистрация
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<RegisterForm />
				<SocialButtons />

				<p className='mt-10 text-center text-sm text-gray-500'>
					Уже есть аккаунт?{' '}
					<Link
						href='/auth/login'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
					>
						Войти
					</Link>
				</p>
			</div>
		</div>
	)
}