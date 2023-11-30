'use client'

import { Field, Loader } from '@/components/workspace/index'
import { useSendMessageMutation } from '@/redux/features/conversations/chatApiSlice'
import { useAppDispatch } from '@/redux/hooks'
import { ArrowRightToLine, Send } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function MessageField() {
	const dispatch = useAppDispatch()
	const [message, setMessage] = useState('')
	const { id } = useParams()

	const [sendMessage, { isLoading }] = useSendMessageMutation()

	const onSubmit = async () => {
		if (!message || isLoading) return

		try {
			await sendMessage({ id, content: message, stream: false }).unwrap()
			setMessage('')
		} catch (error) {
			console.error('Error sending message:', error)
		}
	}

	return (
		<div className='border-t border-darkgrey p-4 flex items-center justify-between text-black'>
			<Field
				placeholder='Write a message...'
				Icon={ArrowRightToLine}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') onSubmit()
				}}
				className='w-full'
			/>
			<button
				onClick={onSubmit}
				disabled={!message || isLoading}
				className='hover:text-primary transition-colors pr-4'
			>
				{(isLoading && <Loader />) || (
					<Send size={36} className='text-primary' />
				)}
			</button>
		</div>
	)
}
