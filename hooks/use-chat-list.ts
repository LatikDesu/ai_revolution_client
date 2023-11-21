import { useEffect } from 'react'

import {
	useGetChatListQuery,
} from '@/redux/features/conversations/chatApiSlice'

import {
	getChatList,
} from '@/redux/features/conversations/chatSlice'

import { useAppDispatch } from '@/redux/hooks'

function useChatsList() {
	const dispatch = useAppDispatch()

	const { data: chatsList } = useGetChatListQuery()

	useEffect(() => {
		if (chatsList) {
			dispatch(getChatList({ results: chatsList }))
		}

	}, [chatsList, dispatch])
}

export default useChatsList
