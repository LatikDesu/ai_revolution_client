'use client'

import { useGetMessageListQuery } from '@/redux/features/conversations/chatApiSlice'
import {
	selectChats,
	setCurrentChat,
	setCurrentChatMessages,
} from '@/redux/features/conversations/chatSlice'
import { UUID } from 'crypto'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'

interface ChatButtonProps {
	id: UUID | null
	title: string
	created_at: string
}

const ChatButton: React.FC<ChatButtonProps> = ({ id, title, created_at }) => {
	const dispatch = useAppDispatch()
	const chats = useAppSelector(selectChats)

	const handleChatClick = () => {
		if (id !== null) {
			dispatch(setCurrentChat(id))
		}
	}

	const { data: messageList } = useGetMessageListQuery({
		id: chats.currentChat_id,
	})

	React.useEffect(() => {
		if (messageList) {
			dispatch(setCurrentChatMessages({ results: messageList.results }))
		}
	}, [dispatch, id, messageList])

	// const handleChatClick = () => {
	// 	if (id !== null) {
	// 		dispatch(setCurrentChat(id))
	// 	}
	// }

	// const { data: messageList } = useGetMessageListQuery({
	// 	id: chats.currentChat_id,
	// })

	// if (messageList) {
	// 	dispatch(setCurrentChatMessages({ results: messageList.results }))
	// }

	return (
		<li
			className='p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 font-normal'
			onClick={handleChatClick}
		>
			<span>{title}</span>
		</li>
	)
}

export default ChatButton
