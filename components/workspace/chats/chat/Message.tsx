'use client'

import { useChatStream } from '@/hooks'
import { IMessage, IStreamResponse } from '@/types/chat.types'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Message({ message }: { message: IMessage }) {
	const { id } = useParams()

	const isActive = localStorage.getItem('isStreaming') === 'true'
	const res = useChatStream(id as string, false)

	const [streamData, setStreamData] = useState<IStreamResponse | null>(null)

	const isSender = message.role === 'user'

	useEffect(() => {
		console.log(res)
		if (!res.finish_reason || res.finish_reason !== 'stop') {
			setStreamData(res)
		}
	}, [streamData, setStreamData, res])

	// const [streamResponse, setStreamResponse] = useState<IStreamResponse | null>(
	// 	null
	// )

	// useEffect(() => {
	// 	let isMounted = true
	// 	const prevStreamResponse = localStorage.getItem('streamResponse')

	// 	const updateStreamResponse = () => {
	// 		const newStreamResponse = localStorage.getItem('streamResponse')

	// 		if (isMounted && newStreamResponse !== prevStreamResponse) {
	// 			setStreamResponse(JSON.parse(newStreamResponse as string))
	// 		}
	// 	}

	// 	updateStreamResponse()

	// 	window.addEventListener('storage', updateStreamResponse)

	// 	return () => {
	// 		isMounted = false
	// 		window.removeEventListener('storage', updateStreamResponse)
	// 	}
	// }, [])

	return (
		<>
			<div
				className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2.5`}
			>
				<div
					className={`relative flex items-center ${
						isSender ? 'flex-row-reverse' : ''
					}`}
				>
					<Image
						src='/no-avatar.png'
						alt='Avatar'
						className='rounded-full'
						width={50}
						height={50}
					/>
					<div className={isSender ? 'mr-3' : 'ml-3'}>
						<div
							className={`text-sm text-white py-1.5 mt-4 px-3 rounded-2xl ${
								isSender
									? 'rounded-tr-none bg-primary'
									: 'rounded-tl-none bg-grey'
							}`}
						>
							{message.content}
						</div>
						<div
							className={`text-xs opacity-30 block mt-1.5 ${
								isSender ? 'text-right' : 'text-left'
							}`}
						>
							{dayjs(message.createdAt).format('HH:mm')}
						</div>
					</div>
				</div>
			</div>
			{<ExtraComponent streamResponse={streamData} />}
		</>
	)
}

const ExtraComponent = ({ streamResponse }: { streamResponse: any }) => {
	return (
		<div className={'flex justify-start mb-2.5'}>
			<div className={'relative flex items-center'}>
				<Image
					src='/no-avatar.png'
					alt='Avatar'
					className='rounded-full'
					width={50}
					height={50}
				/>
				<div className='ml-3'>
					<div className='text-sm text-white py-1.5 mt-4 px-3 rounded-2xl rounded-tl-none bg-grey'>
						{streamResponse?.content}
					</div>
				</div>
			</div>
		</div>
	)
}
