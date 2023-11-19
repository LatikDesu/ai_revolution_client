'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface LinkContextProps {
	currentLink: string
	handleLinkChange: (link: string) => void
}

const LinksContext = createContext<LinkContextProps | undefined>(undefined)

interface LinksProviderProps {
	children: ReactNode
}

export const LinksProvider: React.FC<LinksProviderProps> = ({ children }) => {
	const [currentLink, setCurrentLink] = useState<string>('chat')

	const handleLinkChange = (link: string) => {
		setCurrentLink(link)
	}

	return (
		<LinksContext.Provider value={{ currentLink, handleLinkChange }}>
			{children}
		</LinksContext.Provider>
	)
}

export const useLinks = (): LinkContextProps => {
	const context = useContext(LinksContext)
	if (!context) {
		throw new Error('useLinks must be used within a TabsProvider')
	}
	return context
}
