'use client'
import { Loader, Message, MessageField } from '@/components/workspace/index'
import { useGetMessageListQuery } from '@/redux/features/conversations/chatApiSlice'
import { RootState } from '@/redux/store'
import { UUID } from 'crypto'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export default function Chat({ id }: { id: UUID }) {
	const componentUpdateCount = useSelector(
		(state: RootState) => state.update.componentUpdateCount
	)

	const {
		data: messagesList,
		isLoading,
		refetch,
	} = useGetMessageListQuery({ id: id })

	const messagesContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (componentUpdateCount > 0) {
			const fetchData = async () => {
				await refetch()
				if (messagesContainerRef.current) {
					messagesContainerRef.current.scrollTop =
						messagesContainerRef.current.scrollHeight
				}
			}

			fetchData()
		}
	}, [componentUpdateCount, refetch])

	return (
		<div
			className=' border-r border-darkgrey h-full grid bg-white'
			style={{
				gridTemplateRows: isLoading ? '1fr .089fr' : '6fr .6fr',
			}}
		>
			{isLoading ? (
				<div className='flex items-center justify-center'>
					<Loader />
				</div>
			) : (
				<>
					{/* <ChatHeader title={messagesList?.title} /> */}
					<div
						ref={messagesContainerRef}
						className='p-4 border-t border-darkgrey'
						style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 120px)' }}
					>
						{messagesList?.messages.map((message) => (
							<Message key={message.id} message={message} />
						))}
					</div>
				</>
			)}
			<MessageField />
		</div>
	)
}
