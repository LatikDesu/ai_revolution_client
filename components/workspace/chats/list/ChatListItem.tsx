'use client'

import { IChat } from '@/types/chat.types'
import dayjs from 'dayjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IChatListItem {
	chat: IChat
}

export default function ChatListItem({ chat }: IChatListItem) {
	const isActive = usePathname() === `/workspace/chat/${chat.id}`
	console.log(usePathname())

	return (
		<Link
			href={`/workspace/chat/${chat.id}`}
			className={`p-4 flex items-center border-b border-grey duration-300 ease-linear transition-colors hover:bg-greyblue animation-slide-fade ${
				isActive ? 'bg-greyblue' : ''
			}`}
		>
			<div className='text-sm w-full'>
				<div className='flex items-center justify-between'>
					<span>{chat?.title}</span>
					{dayjs(chat?.updated_at).format('HH:mm')}
				</div>
			</div>
		</Link>
	)
}
