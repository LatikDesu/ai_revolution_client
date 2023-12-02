import { FC, useEffect, useState } from 'react'

import { useAppDispatch } from '@/redux/hooks'
import { IStreamResponse } from '@/types/chat.types'
import { useParams } from 'next/navigation'

const ChatGPT: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()

	const baseUrl = `${process.env.NEXT_PUBLIC_HOST}/api/v1`

	const [response, setResponse] = useState<IStreamResponse>({
		role: '',
		content: '',
		finish_reason: '',
	})

	useEffect(() => {
		const eventSource = new EventSource(
			`${baseUrl}/conversations/${id}/stream/`,
			{ withCredentials: true }
		)

		eventSource.onmessage = (event) => {
			const responseObject = JSON.parse(event.data)

			setResponse((prev: IStreamResponse) => {
				return {
					role: prev.role + (responseObject['role'] || ''),
					content: prev.content + (responseObject['content'] || ''),
					finish_reason: responseObject['finish_reason'] || prev.finish_reason,
				}
			})

			if (responseObject['finish_reason']) {
				eventSource.close()
			}
		}

		eventSource.onerror = (error) => {
			console.error('Error with SSE connection:', error)
			eventSource.close()
		}

		return () => {
			eventSource.close()
		}
	})

	return (
		<>
			{response.content ? response.content : <p>Loading chatGPT response...</p>}
		</>
	)
}

export default ChatGPT
