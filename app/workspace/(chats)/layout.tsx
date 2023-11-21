import { ChatsList } from '@/components/workspace/index'
import { type PropsWithChildren } from 'react'

export default function ChatLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='grid h-full bg-greyblue bg-opacity-90'
			style={{
				gridTemplateColumns: '.8fr 3fr',
			}}
		>
			<div className='border-r-[1px] border-darkgrey'>
				<ChatsList />
			</div>
			{children}
		</div>
	)
}
