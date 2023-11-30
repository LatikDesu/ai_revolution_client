import { UUID } from 'crypto'

export interface IMessage {
	id: UUID
	conversation: UUID
	content: string
	isFromUser: boolean
	inReplyTo: UUID
	createdAt: string
}

export interface IChat {
	id: UUID
	title: string
	model: string
	prompt: string
	updatedAt: string
}
