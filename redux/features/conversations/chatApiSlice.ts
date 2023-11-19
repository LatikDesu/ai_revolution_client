import { UUID } from 'crypto'
import { apiSlice } from '../../services/apiSlice'

interface Folder {
	id: UUID
	title: string
	conversations: ConversationFolder[]
}

interface ConversationFolder {
	id: UUID
	title: string
	created_at: string
}

interface Message {
	id: UUID
	conversation: any
	content: string
	is_from_user: boolean
	in_reply_to: any
	created_at: string
}

interface ApiResponse {
	count: number
	next: null | string
	previous: null | string
	results: Message[]
}

export const chatApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getFoldersList: builder.query<Folder, void>({
			query: () => '/conversations/folders/list/',
		}),
		createFolder: builder.mutation({
			query: ({ title }) => ({
				url: '/conversations/folders/create/',
				method: 'POST',
				body: { title },
			}),
		}),
		updateFolder: builder.mutation({
			query: ({ id, title }) => ({
				url: `/conversations/folders/${id}/title/`,
				method: 'PATCH',
				body: { title },
			}),
		}),
		deleteFolder: builder.mutation<void, { id: UUID | null }>({
			query: ({ id }) => ({
				url: `/conversations/folders/${id}/delete/`,
				method: 'DELETE',
			}),
		}),

		getMessageList: builder.query<ApiResponse, { id: UUID | null }>({
			query: ({ id }) => `/conversations/${id}/messages/`,
		}),
	}),
})

export const {
	useGetFoldersListQuery,
	useCreateFolderMutation,
	useUpdateFolderMutation,
	useDeleteFolderMutation,
	useGetMessageListQuery,
} = chatApiSlice
