import { Chat, Sidebar, TabsProvider } from '@/components/chat'

export default function Chating() {
	return (
		<section className='flex pt-0 h-1/2'>
			<TabsProvider>
				<Sidebar />
				<Chat />
			</TabsProvider>
		</section>
	)
}
