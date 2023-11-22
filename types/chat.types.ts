import { UUID } from 'crypto'

export interface IMessage {
	id: UUID
	conversation: UUID
	content: string
	is_from_user: boolean
	in_reply_to: UUID
	created_at: string
}

export interface IChat {
	id: UUID
	title: string
	model: string
	prompt: string
	updated_at: string
}
