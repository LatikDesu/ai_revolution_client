import Link from 'next/link'
import { ChangeEvent } from 'react'

interface Props {
	labelId: string
	type: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	value: string
	children: React.ReactNode
	link?: {
		linkText: string
		linkUrl: string
	}
	required?: boolean
}

export default function Input({
	labelId,
	type,
	onChange,
	value,
	children,
	link,
	required = false,
}: Props) {
	return (
		<>
			<div className='relative my-8 text-textlight border-b border-textlight border-opacity-50 '>
				<label
					htmlFor={labelId}
					className='absolute top-50% left-1.5 translate-y-1/2 text-sm leading-6 font-normal brightness-50 pointer-events-none'
				>
					{children}
				</label>
				<input
					id={labelId}
					className='bg-transparent w-full text-sm leading-6 font-normal border-none outline-none focus:ring-0 '
					name={labelId}
					type={type}
					onChange={onChange}
					value={value}
					required={required}
				/>
			</div>
			{link && (
				<div className='text-sm'>
					<Link
						className='font-normal text-textlight hover:text-texthover'
						href={link.linkUrl}
					>
						{link.linkText}
					</Link>
				</div>
			)}
		</>
	)
}
