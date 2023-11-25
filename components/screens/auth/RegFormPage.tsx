import { SocialButtons } from '@/components/common'
import { RegisterForm } from '@/components/forms'
import Link from 'next/link'

export default function RegFormPage() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center'>
			<div className=''>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Регистрация
				</h2>
			</div>

			<div className='mt-10 mx-auto'>
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
