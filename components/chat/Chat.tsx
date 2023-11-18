'use client'

import { Form, useTabs } from '@/components/chat'
import { useState } from 'react'

export default function Chat() {
	const { currentTab, handleTabChange } = useTabs()
	const [active, setActive] = useState('Ask anything')
	const [hide, setHide] = useState(true)

	console.log('Current Tab:', currentTab)

	const close = (e: any) => {
		e.preventDefault()
		setHide(false)
	}

	const prooductList = [
		'Ask anything',
		'I want to buy something',
		'I want to sell something',
		'Help me',
		'About',
		'Contact',
	]

	return (
		<div className='flex w-screen'>
			{/* NAVBAR */}
			<div className='w-1/6 bg-gray-200 p-4 shadow-md'>
				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search...'
						className='w-full p-2 border rounded'
					/>
				</div>
				<div
					className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
						currentTab === 'chat' ? 'block' : 'hidden'
					} `}
				>
					<ul id='innerLink'>
						{prooductList.map((item, index) => (
							<li
								key={index + 1}
								onClick={() => setActive(item)}
								className={item == active ? 'active' : ''}
							>
								<a href='#!' data-title='Ask anything'>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div
					className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
						currentTab === 'notes' ? 'block' : 'hidden'
					} `}
				>
					notes
				</div>
				<div
					className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
						currentTab === 'roles' ? 'block' : 'hidden'
					} `}
				>
					roles
				</div>
			</div>
			{/* NAVBAR */}

			{/* HEADER */}
			<div className='flex-1 flex flex-col'>
				<div className='bg-gray-800 text-white p-4'>
					<h3 id='targetDiv'>{active}</h3>
				</div>
				{/* HEADER */}

				{/* CHAT */}
				<div
					className='flex-1 overflow-y-auto p-4 bg-gray-100 active relative'
					id='chat'
					role='tabpanel'
					aria-labelledby='chat'
				>
					<div className='d-flex justify-content-center align-items-center w-full h-full'>
						{hide ? (
							<div className='text-center'>
								<img
									src='assets/svg/no-chat.svg'
									className='img-fluid mx-auto'
									alt='no-chat'
								/>
								<h3>
									{active === 'Ask anything' ? '' : 'Ask'} {active} chatbot
								</h3>
							</div>
						) : (
							''
						)}
					</div>
					<div className='' id='chat-container'></div>
					<Form close={close} className='fixed bottom-0 w-full' />
				</div>
				{/* CHAT */}
			</div>
		</div>
	)
}
