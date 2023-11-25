import { SocialButtons } from '@/components/common'
import { LoginForm } from '@/components/forms'
import Link from 'next/link'

export default function LoginFormPage() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center '>
			<div className=''>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Войдите в свой аккаунт
				</h2>
			</div>

			<div className='mt-10 mx-auto'>
				<LoginForm />
				<SocialButtons />
				<p className='mt-10 text-center text-sm text-gray-500'>
					Еще нет аккаунта?{' '}
					<Link
						href='/auth/registration'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
					>
						Зарегистрироваться
					</Link>
				</p>
			</div>
		</div>
	)
}
