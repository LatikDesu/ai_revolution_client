import { useEffect } from 'react'

import {
	useGetSystemPromptsQuery,
	useGetUserPromptsQuery,
} from '@/redux/features/prompts/promptsApiSlice'

import {
	setSystemPrompts,
	setUserPrompts,
} from '@/redux/features/prompts/promptsSlice'

import { useAppDispatch } from '@/redux/hooks'

function usePrompts() {
	const dispatch = useAppDispatch()

	const { data: systemprompts } = useGetSystemPromptsQuery()
	const { data: userprompts } = useGetUserPromptsQuery()

	useEffect(() => {
		if (systemprompts) {
			dispatch(setSystemPrompts({ results: systemprompts.results }))
		}

		if (userprompts) {
			dispatch(setUserPrompts({ results: userprompts.results }))
		}
	}, [systemprompts, userprompts, dispatch])
}

export default usePrompts
