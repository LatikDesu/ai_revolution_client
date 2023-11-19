import { apiSlice } from '../../services/apiSlice'

interface Prompt {
	id: any
	title: string
	description: string
	prompt: string
}

interface ApiResponse {
	count: number
	next: null | string
	previous: null | string
	results: Prompt[]
}

interface UpdatePromptArgs {
	title?: string
	description?: string
	prompt?: string
}

export const promptsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSystemPrompts: builder.query<ApiResponse, void>({
			query: () => '/prompts/systemprompts/',
		}),
		getUserPrompts: builder.query<ApiResponse, void>({
			query: () => '/prompts/userprompts/',
		}),
		createUserPrompt: builder.mutation({
			query: ({ title, description, prompt }) => ({
				url: '/prompts/userprompts/',
				method: 'POST',
				body: { title, description, prompt },
			}),
		}),
		updateUserPrompt: builder.mutation<Prompt, UpdatePromptArgs>({
			query: (args) => ({
				url: '/prompts/userprompts/${args.id}/',
				method: 'PATCH',
				body: args,
			}),
		}),
		deleteUserPrompt: builder.mutation<void, { id: any }>({
			query: ({ id }) => ({
				url: `/prompts/userprompts/${id}/`,
				method: 'DELETE',
			}),
		}),
	}),
})

export const {
	useGetSystemPromptsQuery,
	useGetUserPromptsQuery,
	useCreateUserPromptMutation,
	useUpdateUserPromptMutation,
	useDeleteUserPromptMutation,
} = promptsApiSlice
