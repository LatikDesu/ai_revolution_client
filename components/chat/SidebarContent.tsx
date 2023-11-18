'use client'
import { useTabs } from '@/components/chat'

import { BsChatLeft, BsPeople } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { TbNotes } from 'react-icons/tb'

export default function SidebarContent() {
	const { currentTab, handleTabChange } = useTabs()

	const changeTab = (newTab: string) => {
		handleTabChange(newTab)
	}

	return (
		<aside className='flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-darkgrey  dark:bg-gray-900 dark:border-gray-700'>
			<nav className='flex flex-col flex-1 space-y-6 tabs'>
				<a
					onClick={() => changeTab('chat')}
					className={`p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 ${
						currentTab === 'chat'
							? 'bg-primary text-white'
							: 'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white'
					}`}
				>
					<BsChatLeft className='icon-custom  text-white' />
				</a>

				<a
					onClick={() => changeTab('notes')}
					className={`p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100
					${
						currentTab === 'notes'
							? 'bg-primary text-white'
							: 'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white'
					}`}
				>
					<TbNotes className='icon-custom  text-white' />
				</a>

				<a
					onClick={() => changeTab('roles')}
					className={`p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 ${
						currentTab === 'roles'
							? 'bg-primary text-white'
							: 'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white'
					}`}
				>
					<BsPeople className='icon-custom text-white' />
				</a>
			</nav>

			<div className='flex flex-col space-y-6'>
				<a
					onClick={() => changeTab('settings')}
					className={`p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100 ${
						currentTab === 'settings'
							? 'bg-primary text-white'
							: 'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white'
					}`}
				>
					<FiSettings className='icon-custom' />
				</a>
			</div>
		</aside>
	)
}
