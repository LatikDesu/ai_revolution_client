'use client'

import { Send } from '@/components/common/Icons'
import { Loader } from '@/components/screens/conversations'
import { useSaveMessageMutation } from '@/redux/features/conversations/chatApiSlice'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function MessageField({
	message,
	setMessage,
}: {
	message: string
	setMessage: React.Dispatch<React.SetStateAction<string>>
}) {
	const { id } = useParams()
	const [isClicked, setIsClicked] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const [isButtonHovered, setIsButtonHovered] = useState(false)

	const [saveMessage, { isLoading }] = useSaveMessageMutation()

	const textareaRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				textareaRef.current &&
				!textareaRef.current.contains(event.target as Node)
			) {
				setIsClicked(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const onSubmit = async () => {
		if (!message || isLoading) return

		try {
			await saveMessage({ id, content: message, role: 'user' }).unwrap()
			setMessage('')
			localStorage.setItem('isStreaming', 'true')
			setIsClicked(true)
		} catch (error) {
			console.error('Error sending message:', error)
		}
	}

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = e.target
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
		setMessage(e.target.value)
	}

	const handleTextareaFocus = () => {
		setIsClicked(true)
		setIsHovered(true)
		if (textareaRef.current) {
			textareaRef.current.style.borderColor = '#4A7AFF'
		}
	}

	const handleTextareaBlur = () => {
		setIsClicked(false)
		setIsHovered(false)
		if (textareaRef.current) {
			textareaRef.current.style.borderColor = 'initial'
		}
	}

	const handleButtonMouseEnter = () => {
		setIsButtonHovered(true)
	}

	const handleButtonMouseLeave = () => {
		setIsButtonHovered(false)
	}

	return (
		<div className='absolute left-1/2 transform -translate-x-1/2 bottom-4 p-4 flex items-center justify-center w-4/5 text-white'>
			<div className='w-full flex flex-col items-center justify-center'>
				<div
					ref={textareaRef}
					className={`w-full flex items-center justify-center border rounded-lg border-textlight p-2 ${
						isClicked
							? 'border-opacity-100 border-blue-500'
							: isHovered
							? 'border-opacity-70'
							: 'border-opacity-40'
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<textarea
						placeholder='Напишите Ваш запрос'
						value={message}
						onChange={handleTextareaChange}
						onFocus={handleTextareaFocus}
						onBlur={handleTextareaBlur}
						className={`w-full field ${isClicked ? 'border-blue-500' : ''}`}
						style={{
							background: '#2F3441',
							color: 'inherit',
							padding: '10px',
							border: 'none',
							overflowY: 'auto',
							resize: 'none',
							borderRadius: '10px',
							maxHeight: '146px',
							boxShadow: isClicked ? 'none' : 'initial',
							transition: 'border-color 0.3s ease-in-out',
						}}
					/>

					<button
						onClick={onSubmit}
						disabled={!message || isLoading}
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
						className={`${
							isButtonHovered ? 'bg-gray-700' : ''
						} rounded-full p-2 focus:outline-none hover:bg-gray-700 flex items-center justify-center`}
						style={{
							width: '40px',
							height: '40px',
							borderRadius: '8px',
						}}
					>
						{(isLoading && <Loader />) || (
							<Send className='text-textlight text-opacity-40 hover:text-opacity-100' />
						)}
					</button>
				</div>
				<p className='text-sm text-textlight text-opacity-40 pt-3'>
					Сервис может допускать ошибки, проверяйте полученную информацию!
				</p>
			</div>
		</div>
	)
}
