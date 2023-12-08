import { Chat } from '@/components/workspace/index'
import { UUID } from 'crypto'

export default function ChatPage({ params }: { params: { id: UUID } }) {
	return <Chat id={params.id} />
}
