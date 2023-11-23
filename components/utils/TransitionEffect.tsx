'use client'
import { AnimatePresence, motion } from 'framer-motion'

const TransitionEffect = () => {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-basecolor'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			/>
			<motion.div
				className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-baseorange'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				transition={{ delay: 0.1, duration: 0.5, ease: 'easeInOut' }}
			/>
			<motion.div
				className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-basecyan'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
			/>
		</AnimatePresence>
	)
}

export default TransitionEffect
