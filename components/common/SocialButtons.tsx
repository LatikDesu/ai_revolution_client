'use client'

import { SocialButton } from '@/components/common'
import { continueWithGithub, continueWithGoogle, continueWithVK } from '@/utils'
import { ImGithub, ImGoogle, ImVk } from 'react-icons/im'

export default function SocialButtons() {
	return (
		<div className='flex justify-between items-center gap-2 mt-5'>
			<SocialButton provider='google' onClick={continueWithGoogle}>
				<ImGoogle className='mr-3' /> Google
			</SocialButton>
			<SocialButton provider='vk' onClick={continueWithVK}>
				<ImVk className='mr-3' /> ВКонтакте
			</SocialButton>
			<SocialButton provider='github' onClick={continueWithGithub}>
				<ImGithub className='mr-3' /> Github
			</SocialButton>
		</div>
	)
}
