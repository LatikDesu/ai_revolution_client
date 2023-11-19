import React from 'react'
import FolderButton from './FolderButton'

interface FolderListProps {
	data: {
		id: string
		title: string
		conversations: {
			id: string
			title: string
			created_at: string
		}[]
	}[]
}

const FolderList: React.FC<FolderListProps> = ({ data }) => (
	<div className='folder-list'>
		{data.map((item) => (
			<FolderButton key={item.id} {...item} />
		))}
	</div>
)

export default FolderList
