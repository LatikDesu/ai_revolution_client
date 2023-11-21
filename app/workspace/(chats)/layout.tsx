import { ChatsList } from '@/components/workspace/index'
import { type PropsWithChildren } from 'react'

export default function ChatLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='grid h-full'
			style={{
				gridTemplateColumns: '.7fr 3fr',
			}}
		>
			<div className='border-r-[1px] border-grey'>
				<ChatsList />
			</div>
			<div>{children}</div>
		</div>
	)
}
