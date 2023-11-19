import React from 'react'

interface CardProps {
	title: string
	description: string
}

const Card: React.FC<CardProps> = ({ title, description }) => (
	<div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
		<div className='px-6 py-4'>
			<div className='font-bold text-xl mb-2 text-center'>{title}</div>
			<p className='text-gray-700 text-base'>{description}</p>
		</div>
	</div>
)

export default Card
