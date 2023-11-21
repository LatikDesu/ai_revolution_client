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

interface Chat {
	id: UUID
	title: string
	prompt: string
	updated_at: string
}

interface ChatApiResponse {
	count: number
	next: null | string
	previous: null | string
	results: Chat[]
}

interface Message {
	id: UUID
	conversation: UUID
	content: string
	is_from_user: boolean
	in_reply_to: any
	created_at: string
}

interface messagesListApiResponse {
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
		getChatList: builder.query<ChatApiResponse, void>({
			query: () => '/conversations/',
		}),
		getMessageList: builder.query<messagesListApiResponse, { id: UUID | null }>(
			{
				query: ({ id }) => `/conversations/${id}/messages/`,
			}
		),
		sendMessage: builder.mutation({
			query: ({ id, content, regenerate }) => ({
				url: `/conversations/${id}/messages/create/`,
				method: 'POST',
				body: { content, regenerate },
			}),
		}),
	}),
})

export const {
	useGetFoldersListQuery,
	useGetChatListQuery,
	useSendMessageMutation,
	useCreateFolderMutation,
	useUpdateFolderMutation,
	useDeleteFolderMutation,
	useGetMessageListQuery,
} = chatApiSlice
