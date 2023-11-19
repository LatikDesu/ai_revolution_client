import { Chat, LinksProvider, Sidebar, TabsProvider } from '@/components/chat'
import { usePrompts } from '@/hooks'

export default function Chating() {
	usePrompts()

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
