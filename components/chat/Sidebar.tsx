'use client'
import { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'

import { SidebarContent } from '@/components/chat'

export default function Sidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}

	return (
		<div>
			<div className='hidden lg:block'>
				<SidebarContent />
			</div>

			<div className='block lg:hidden'>
				<button
					onClick={toggleSidebar}
					className='text-gray-500 focus:outline-none'
				>
					{isSidebarOpen ? (
						<BiX className='mobile_custom_menu' />
					) : (
						<BiMenu className='mobile_custom_menu' />
					)}
				</button>
			</div>

			{isSidebarOpen && (
				<aside
					className={`lg:hidden relative flex flex-col items-center w-min h-full py-8 overflow-y-auto bg-darkgrey  dark:bg-gray-900 dark:border-gray-700 transition-transform duration-300 ${
						isSidebarOpen ? '' : 'translate-x-full'
					}`}
				>
					<SidebarContent />
				</aside>
			)}
		</div>
	)
}
