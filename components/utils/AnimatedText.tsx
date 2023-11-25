'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

interface AnimatedTextProps {
	text: string
	className?: string
}

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0,
			staggerChildren: 0.08,
		},
	},
}

const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, className = '' }) => {
	return (
		<AnimatePresence mode='wait'>
			<div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
				<motion.h1
					className={`inline-block w-full text-white ${className}`}
					variants={quote}
					initial='initial'
					animate='animate'
				>
					{text.split(' ').map((word, index) => (
						<motion.span
							key={`${word}-${index}`}
							className='inline-block'
							variants={singleWord}
						>
							{word}&nbsp;
						</motion.span>
					))}
				</motion.h1>
			</div>
		</AnimatePresence>
	)
}

export default AnimatedText
