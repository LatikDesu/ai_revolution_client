import { LucideIcon } from 'lucide-react'

interface Button {
	label: string
	icon: LucideIcon
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface ButtonGroupProps {
	buttons: Button[]
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
	return (
		<div>
			{buttons.map((button) => (
				<button
					className='p-1 rounded bg-darkgrey text-gray-700 hover:bg-primary'
					onClick={button.onClick}
					key={button.label}
				>
					<button.icon size={16} />
				</button>
			))}
		</div>
	)
}

export default ButtonGroup
