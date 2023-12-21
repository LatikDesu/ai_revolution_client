import { ChatsList } from '@/components/screens/conversations'
import { type PropsWithChildren } from 'react'

export default function ChatLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='grid h-full w-full bg-bgchatlist bg-opacity-90'
			style={{
				display: 'grid',
				gridTemplateColumns: '20% auto',
			}}
		>
			<div className="bg-[url('/bgChats.png')] bg-auto bg-center bg-no-repeat">
				<ChatsList />
			</div>
			{children}
		</div>
	)
}
