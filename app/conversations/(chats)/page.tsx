import { Send } from '@/components/common/Icons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'CreaCraft | Умный помощник для эффективной работы',
	description: 'CreaCraft | ChatGPT assistant',
}

export default function Page() {
	return (
		<div className='flex flex-col h-full w-full justify-center items-center text-center px-56 bg-bgchatmessage'>
			<h1 className='text-3xl font-bold text-texthover'>Приветсвую!</h1>
			<p className='leading-normal text-muted-foreground py-10'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
				expedita rem dolore ut numquam fugiat, accusantium consequatur ratione
				nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo autem
				adipisci cupiditate. Repellendus!
			</p>

			<Send />
		</div>
	)
}
