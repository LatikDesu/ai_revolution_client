import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UUID } from 'crypto'
import type { RootState } from '../../store'
import { logout as logoutAction } from '../authSlice'

interface Chat {
	id: UUID
	model: string
	title: string
	prompt: string
	updatedAt: string
}

interface Message {
	id: UUID
	conversation: any
	content: string
	isFromUser: boolean
	inReplyTo: any
	createdAt: string
}

interface CurrentChat {
	id: UUID
	title: string
	model: string
	temperature: number
	maxLength: number
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
			action: PayloadAction<CurrentChat>
		) => {
			state.currentChat = action.payload
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
