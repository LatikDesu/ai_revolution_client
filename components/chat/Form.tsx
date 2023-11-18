import { MdSend } from 'react-icons/md'

export default function Form(close: any) {
	return (
		<form id='form_input_data' className='msger-inputarea flex items-center'>
			<input
				type='text'
				name='prompt'
				className='msger-input flex-1 mr-2 p-2 border rounded focus:outline-none'
				placeholder='Type your message...'
			/>
			<button
				type='submit'
				className='msger-send-btn ml-2 p-2 bg-blue-500 rounded text-white focus:outline-none'
				onClick={() => close()}
			>
				<MdSend className='icon_size' />
			</button>
		</form>
	)
}
