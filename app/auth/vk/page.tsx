'use client'

import { Spinner } from '@/components/common'
import { FormsScreensLayout } from '@/components/screens/authForms'
import { useSocialAuth } from '@/hooks'
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice'

export default function Index() {
	const [vkAuthenticate] = useSocialAuthenticateMutation()
	useSocialAuth(vkAuthenticate, 'vk-oauth2')

	return (
		<FormsScreensLayout>
			<div className='my-8'>
				<Spinner lg />
			</div>
		</FormsScreensLayout>
	)
}
