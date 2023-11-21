import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'CreaCraft | Умный помощник для эффективной работы',
	description: 'CreaCraft | ChatGPT assistant',
}

export default function Page() {
	return (
		<div className='bg-white w-full h-full flex items-center justify-center text-center h-60%'>
			<div className='rounded-lg border bg-greyblue p-4 m-16'>
				<h1 className='mb-2 text-lg font-semibold'>Добро пожаловать!</h1>
				<p className='leading-normal text-muted-foreground'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					expedita rem dolore ut numquam fugiat, accusantium consequatur ratione
					nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo
					autem adipisci cupiditate. Repellendus!
				</p>
				<div className='grid grid-cols-2 gap-4 mt-10'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-lg'>Примени новые технологии</div>
						<div className='text-sm'>
							в области рекламы продукта. Вы - рекламщик креативного агентства,
							продвигаете продукт с целью его популяризации. Наименование
							продукта - шоу-соревнования по спортивным бальным танцам. Выведи в
							виде списка. Приведи примеры.
						</div>
					</button>

					<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-base'>Сравни принципы креатива</div>
						<div className='text-xs'>
							маскота для мобильных приложений и настольного программного
							обеспечения. Опиши 10 различий. Создай таблицу со столбцами :
							Критерии , Мобильное приложение , Настольное ПО. Дай рекомендации
							по композиции экрана.
						</div>
					</button>

					<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-base'>Вы - генератор необычных,</div>
						<div className='text-xs'>
							поразительных слоганов для рекламы продукта. Наименование продукта
							- мобильное приложение о героях аниме. Я буду вводить ключевые
							слова через запятую, а вы будете отвечать невероятными слоганами.
							Слоганы в стиле хокку - 10 штук, фразовые слоганы - 10 штук.
							Слоганы вывести в виде списка . Мои первые ключевые слова - манга,
							косплей, отаку, летать, мечтать, преодолевать, прорыв, любовь,
							победа.
						</div>
					</button>

					<button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
						<div className='text-base'>Четвертая</div>
						<div className='text-xs'>Кнопка</div>
					</button>
				</div>
			</div>
		</div>
	)
}
