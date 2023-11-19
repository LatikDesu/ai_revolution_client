'use client'
import { useLinks } from '@/components/chat'



export default function PromptsNav() {
	

	const { currentLink, handleLinkChange } = useLinks()

	const changeLink = (newLink: string) => {
		handleLinkChange(newLink)
	}

	

	return (
		<ul id='innerLink'>
			<li
				onClick={() => changeLink('systemRoles')}
				className={`p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 ${
					currentLink === 'systemRoles'
						? 'bg-primary text-white'
						: 'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white'
				}`}
			>
				Системные роли
			</li>
			<li
				onClick={() => changeLink('userRoles')}
				className={`p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 ${
					currentLink === 'userRoles'
						? 'bg-primary text-white'
						: 'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white'
				}`}
			>
				Роли пользователя
			</li>
		</ul>
	)
}
