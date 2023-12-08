import { ChatsList } from '@/components/screens/conversations'
import { type PropsWithChildren } from 'react'

export default function ChatLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='grid h-full bg-bgchatlist bg-opacity-90'
			style={{
				display: 'grid',
				gridTemplateColumns: '20% 80%',
			}}
		>
			<div className=''>
				<ChatsList />
			</div>
			{children}
		</div>
	)
}
