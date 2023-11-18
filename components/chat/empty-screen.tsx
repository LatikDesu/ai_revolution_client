export function EmptyScreen() {
	return (
		<div className='mx-auto max-w-2xl px-4'>
			<div className='rounded-lg border bg-background p-8'>
				<h1 className='mb-2 text-lg font-semibold'>Добро пожаловать!</h1>

				<p className='leading-normal text-muted-foreground'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					expedita rem dolore ut numquam fugiat, accusantium consequatur ratione
					nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo
					autem adipisci cupiditate. Repellendus!
				</p>
				<div className='grid grid-cols-2 gap-4 mt-10'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-lg'>Первая</div>
						<div className='text-sm'>Кнопка</div>
					</button>

					<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-lg'>Вторая</div>
						<div className='text-sm'>Кнопка</div>
					</button>

					<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-lg'>Третья</div>
						<div className='text-sm'>Кнопка</div>
					</button>

					<button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-lg'>Четвертая</div>
						<div className='text-sm'>Кнопка</div>
					</button>
				</div>
			</div>
		</div>
	)
}
