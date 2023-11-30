import { UUID } from 'crypto'
import { apiSlice } from '../../services/apiSlice'

interface Chat {
	id: UUID
	title: string
	model: string
	prompt: string
	updatedAt: string
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
	isFromUser: boolean
	inReplyTo: any
	createdAt: string
}

interface messagesListApiResponse {
	id: UUID
	title: string
	model: string
	temperature: number
	maxLength: number
	prompt: string
	messages: Message[]
}

export const chatApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getChatList: builder.query<ChatApiResponse, void>({
			query: () => '/conversations/',
			providesTags: [{ type: 'Chat', id: 'LIST' }],
		}),
		createChat: builder.mutation<Chat, Partial<Chat>>({
			query: (newChatData) => ({
				url: '/conversations/',
				method: 'POST',
				body: newChatData,
			}),
			invalidatesTags: [{ type: 'Chat', id: 'LIST' }],
		}),
		deleteChat: builder.mutation<{ success: boolean; id: UUID }, UUID>({
			query: (id) => ({
				url: `/conversations/${id}/delete/`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Chat', id: 'LIST' }],
		}),
		configChat: builder.mutation<void, Partial<Chat>>({
			query: (config) => ({
				url: `/conversations/${config.id}/config/`,
				method: 'PATCH',
				body: config,
			}),
			invalidatesTags: [{ type: 'Chat', id: 'LIST' }],
		}),
		getMessageList: builder.query<messagesListApiResponse, { id: UUID | null }>(
			{
				query: ({ id }) => `/conversations/${id}/messages/list/`,
				providesTags: [{ type: 'CurrentChat', id: 'LIST' }],
			}
		),
		sendMessage: builder.mutation({
			query: ({ id, content, stream }) => ({
				url: `/conversations/${id}/messages/create/`,
				method: 'POST',
				body: { content, stream },
			}),
			invalidatesTags: [{ type: 'CurrentChat', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetChatListQuery,
	useCreateChatMutation,
	useConfigChatMutation,
	useDeleteChatMutation,
	useSendMessageMutation,
	useGetMessageListQuery,
} = chatApiSlice
