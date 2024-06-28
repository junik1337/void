import { CardData4 } from '@/constants';
import Image from 'next/image';
import React from 'react';
const Infromation = () => {
	return (
		<section
			id='infromation'
			className='w-full flex-col flex gap-20 px-0 py-12 '
		>
			<div className='flex flex-col md:flex-row justify-between w-full gap-5'>
				<h1 className='h2-bold self-start '>Nos dernières informations</h1>
			</div>

			<div className='w-full flex items-center justify-center flex-col'>
				{CardData4.map((card, index) => (
					<div key={index} className='px-6 py-8 flex flex-col w-full border-2 gap-4'>
						<div className='w-full flex justify-between items-center'>
							<p className='text-sm w-fit'>{card.date}</p>
							<button>
								<Image
									src='/download.svg'
									alt="articles"
									width={30}
									height={30}
									className='rounded-full border p-2 w-9 h-9 border-mypurple'
								/>
							</button>
						</div>
						<p className='p-bold-24 w-full md:w-[70%]'>{card.title}</p>
						<button className="font-bold flex flex-row items-center gap-4">
							<p>{card.button}</p>
							<Image
								src="/right.svg"
								alt="arrow"
								width={20}
								height={20}
								className='w-auto h-auto'
							/>
						</button>
					</div>
				))}
			</div>

			<button className='flex flex-row h-fit gap-2 items-center justify-end'>
				<p className='p-bold-20 md:h5-bold  text-center'>Voir tous les communiqués de presse</p>
				<Image src="/right.svg" alt="articles" width={24} height={24} />
			</button>
		</section>
	);
};

export default Infromation;