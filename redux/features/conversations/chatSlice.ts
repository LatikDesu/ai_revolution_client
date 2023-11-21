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

interface CurrentChat {
	id: UUID
	title: string
	model: string
	temperature: number
	tokenLimit: number
	maxLength: number
	updated_at: string
	prompt: string
	messages: Message[]
}

interface ChatsState {
	chatsList: []
	currentChat: {}
}

const initialState: ChatsState = {
	chatsList: [],
	currentChat: {},
}

const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		getChatList: (state, action) => {
			state.chatsList = action.payload.results
		},
		setCurrentChat: (
			state,
			action: PayloadAction<{ results: CurrentChat }>
		) => {
			state.currentChat = action.payload.results
		},
	},
})

export const selectChats = (state: RootState) => state.chats

export const { getChatList, setCurrentChat } = chatSlice.actions

export default chatSlice.reducer
