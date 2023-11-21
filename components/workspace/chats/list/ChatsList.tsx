'use client'

import { useGetChatListQuery } from '@/redux/features/conversations/chatApiSlice'

import { ChatListItem, Field, Loader } from '@/components/workspace/index'
import { useDebounce } from '@/hooks/useDebounce'
import { getChatList } from '@/redux/features/conversations/chatSlice'
import { useAppDispatch } from '@/redux/hooks'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ChatsList() {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm)

	const dispatch = useAppDispatch()

	const { data: chatsList, isLoading, isFetching } = useGetChatListQuery()

	useEffect(() => {
		if (chatsList) {
			dispatch(getChatList({ results: chatsList }))
		}
	}, [chatsList, dispatch])

	return (
		<div>
			<div className='border-b border-darkgrey '>
				<Field
					placeholder='Search chats'
					Icon={Search}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<div>
				{isLoading || isFetching ? (
					<div className='p-4'>
						<Loader />
					</div>
				) : (
					chatsList?.results.map((chat) => {
						return <ChatListItem key={chat.id} chat={chat} />
					})
				)}
			</div>
		</div>
	)
}
