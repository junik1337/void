import { CardData4 } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { Button } from './ui/button';
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
							<button className='w-[44px] h-[44px] p-1 flex rounded-full border border-mypurple items-center justify-center'>
								<FaDownload className='text-mypurple w-[14px] h-[14px]' />
							</button>
						</div>
						<p className='p-bold-24 w-full md:w-[70%]'>{card.title}</p>
						<Button className="font-bold flex bg-transparent w-fit text-black hover:bg-transparent hover:border-2 hover:border-mypurple flex-row items-center gap-4">
							<p>{card.button}</p>
							<FaArrowRight className="text-mypurple w-[18px] h-[18px]" />
						</Button>
					</div>
				))}
			</div>

			<button className='flex flex-row h-fit gap-2 items-center justify-end'>
				<p className='p-bold-20 md:h5-bold  text-center'>Voir tous les communiqués de presse</p>
				<FaArrowRight className="text-mypurple w-[18px] h-[18px]" />
			</button>
		</section>
	);
};

export default Infromation;