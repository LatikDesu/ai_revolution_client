import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UUID } from 'crypto'
import type { RootState } from '../../store'
import { logout as logoutAction } from '../authSlice'

interface Chat {
	id: UUID
	model: string
	title: string
	prompt: string
	updated_at: string
}

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
	chatsList: Chat[]
	currentChat?: CurrentChat
}

const initialState: ChatsState = {
	chatsList: [],
	currentChat: undefined,
}

const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		getChatList: (state, action: PayloadAction<Chat[]>) => {
			state.chatsList = action.payload
		},
		clearChats: (state) => {
			state.chatsList = []
		},
		addChat: (state, action: PayloadAction<Chat>) => {
			state.chatsList.push(action.payload)
		},
		setCurrentChat: (
			state,
			action: PayloadAction<{ results: CurrentChat }>
		) => {
			state.currentChat = action.payload.results
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logoutAction, (state) => {
			state.chatsList = []
		})
	},
})

export const selectChats = (state: RootState) => state.chats.chatsList
export const selectCurrentChat = (state: RootState) => state.chats.currentChat

export const { getChatList, addChat, setCurrentChat } = chatSlice.actions

export default chatSlice.reducer
