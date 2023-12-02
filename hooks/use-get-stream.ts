import { IStreamResponse } from '@/types/chat.types'
import { useEffect, useState } from 'react'

const baseUrl = `${process.env.NEXT_PUBLIC_HOST}/api/v1`

export default function useChatStream(id: string, isActive: boolean) {
	const [response, setResponse] = useState<IStreamResponse>({
		role: '',
		content: '',
		finish_reason: '',
	})

	useEffect(() => {
		if (!isActive) {
			const cachedResponse = JSON.parse(
				localStorage.getItem('streamResponse') || '{}'
			)
			setResponse(cachedResponse)
			return
		}

		const eventSource = new EventSource(
			`${baseUrl}/conversations/${id}/stream/`,
			{ withCredentials: true }
		)

		eventSource.onmessage = (evt) => {
			const responseObject = JSON.parse(evt.data)

			setResponse((prev: IStreamResponse) => ({
				role: responseObject.role || prev.role,
				content: prev.content + (responseObject.content || ''),
				finish_reason: responseObject.finish_reason || prev.finish_reason,
			}))

			if (responseObject['finish_reason']) {
				localStorage.setItem('isStreaming', 'false')
				eventSource.close()
			}
		}

		eventSource.onerror = (error) => {
			console.error('Error with SSE connection:', error)
			localStorage.setItem('isStreaming', 'false')
			eventSource.close()
		}

		return () => {
			localStorage.setItem('isStreaming', 'false')
			eventSource.close()
		}
	}, [id, isActive])

	useEffect(() => {
		const serializedResponse = JSON.stringify(response)
		localStorage.setItem('streamResponse', serializedResponse)
	}, [response])

	return response
}
