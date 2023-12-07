'use client'

import { SocialButton } from '@/components/common'
import { continueWithGithub, continueWithGoogle, continueWithVK } from '@/utils'
import { ImGoogle } from 'react-icons/im'
import { SlSocialVkontakte } from 'react-icons/sl'
import { TbBrandGithubFilled } from 'react-icons/tb'

export default function SocialButtons() {
	return (
		<div className='justify-center items-center gap-3 flex pt-4'>
			<SocialButton provider='google' onClick={continueWithGoogle}>
				<ImGoogle size={24} className='' />
			</SocialButton>
			<SocialButton provider='vk' onClick={continueWithVK}>
				<SlSocialVkontakte size={24} className='' />
			</SocialButton>
			<SocialButton provider='github' onClick={continueWithGithub}>
				<TbBrandGithubFilled size={24} className='' />
			</SocialButton>
		</div>
	)
}
