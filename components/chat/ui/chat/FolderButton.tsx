import React from 'react'
import ChatButton from './ChatButton'

interface FolderButtonProps {
	title: string
	conversations: {
		id: string
		title: string
		created_at: string
	}[]
}

const FolderButton: React.FC<FolderButtonProps> = ({
	title,
	conversations,
}) => (
	<div className='p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white font-bold'>
		<span>{title}</span>
		<ul>
			{conversations.map((conversation) => (
				<ChatButton key={conversation.id} {...conversation} />
			))}
		</ul>
	</div>
)

export default FolderButton
