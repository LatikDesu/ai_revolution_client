'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface TabsContextProps {
	currentTab: string
	handleTabChange: (tab: string) => void
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined)

interface TabsProviderProps {
	children: ReactNode
}

export const TabsProvider: React.FC<TabsProviderProps> = ({ children }) => {
	const [currentTab, setCurrentTab] = useState<string>('chat')

	const handleTabChange = (tab: string) => {
		setCurrentTab(tab)
	}

	return (
		<TabsContext.Provider value={{ currentTab, handleTabChange }}>
			{children}
		</TabsContext.Provider>
	)
}

export const useTabs = (): TabsContextProps => {
	const context = useContext(TabsContext)
	if (!context) {
		throw new Error('useTabs must be used within a TabsProvider')
	}
	return context
}
