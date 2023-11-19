import { Chat, LinksProvider, Sidebar, TabsProvider } from '@/components/chat'
import { useChatsList, usePrompts } from '@/hooks'

export default function Chating() {
	usePrompts()
	useChatsList()

	return (
		<section className='flex pt-0'>
			<TabsProvider>
				<LinksProvider>
					<Sidebar />
					<Chat />
				</LinksProvider>
			</TabsProvider>
		</section>
	)
}
