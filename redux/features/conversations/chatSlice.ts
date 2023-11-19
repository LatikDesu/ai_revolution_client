import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UUID } from 'crypto'
import type { RootState } from '../../store'

interface Message {
	id: UUID
	conversation: any
	content: string
	is_from_user: boolean
	in_reply_to: any
	created_at: string
}

interface ChatsState {
	chatsList: []
	currentChat_id: UUID | null
	currentChat_messages: Message[]
}

const initialState: ChatsState = {
	chatsList: [],
	currentChat_id: null,
	currentChat_messages: [],
}

const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		getChatList: (state, action) => {
			state.chatsList = action.payload.results
		},
		setCurrentChat: (state, action) => {
			state.currentChat_id = action.payload
		},
		setCurrentChatMessages: (
			state,
			action: PayloadAction<{ results: Message[] }>
		) => {
			state.currentChat_messages = action.payload.results
		},
	},
})

export const selectChats = (state: RootState) => state.chats

export const { getChatList, setCurrentChat, setCurrentChatMessages } =
	chatSlice.actions

export default chatSlice.reducer
