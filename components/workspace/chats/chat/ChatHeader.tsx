import { Settings } from 'lucide-react'

export default function ChatHeader({ title }: { title?: string }) {
	return (
		<div className='p-4 flex items-center justify-between py-[1.56rem]'>
			<div className='flex items-center'>
				<div className='text-sm'>
					<div>{title}</div>
				</div>
			</div>
			<button className='text-[#7C7275] hover:text-white transition-colors ease-linear '>
				<Settings />
			</button>
		</div>
	)
}
