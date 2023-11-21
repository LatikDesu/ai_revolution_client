import { createSlice } from '@reduxjs/toolkit'

interface UpdateState {
	componentUpdateCount: number
}

const initialState: UpdateState = {
	componentUpdateCount: 0,
}

const updateSlice = createSlice({
	name: 'update',
	initialState,
	reducers: {
		updateComponent: (state) => {
			state.componentUpdateCount += 1
		},
	},
})

export const { updateComponent } = updateSlice.actions
export default updateSlice.reducer
