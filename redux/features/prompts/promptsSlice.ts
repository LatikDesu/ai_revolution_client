import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../store'

interface Prompt {
	id: any
	title: string
	description: string
	prompt: string
}

interface PromptsState {
	systemprompts: Prompt[]
	userprompts: Prompt[]
}

const initialState: PromptsState = {
	systemprompts: [],
	userprompts: [],
}

const promptsSlice = createSlice({
	name: 'prompts',
	initialState,
	reducers: {
		setSystemPrompts: (state, action: PayloadAction<{ results: Prompt[] }>) => {
			state.systemprompts = action.payload.results
		},
		setUserPrompts: (state, action: PayloadAction<{ results: Prompt[] }>) => {
			state.userprompts = action.payload.results
		},
	},
})

export const selectPrompts = (state: RootState) => state.prompts

export const { setSystemPrompts, setUserPrompts } = promptsSlice.actions

export default promptsSlice.reducer
