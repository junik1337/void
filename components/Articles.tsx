import { CardData3 } from '@/constants';
import Image from 'next/image';
import React from 'react';
import CardArt from './CardArt';
import Carousel from './Carousel';

const Articles = () => {
	return (
		<section
			id='articles'
			className='w-full flex-col flex items-center gap-20 py-12'
		>
			<div className='flex flex-col md:flex-row justify-between w-full gap-5'>
				<h1 className='h2-bold max-w-56 self-start '>Entreprise Today</h1>
				<div className='flex flex-row h-fit gap-2'>
					<p className='p-bold-20 md:h5-bold'>Lisez nos derniers articles</p>
					<Image src="/right.svg" alt="articles" width={24} height={24} />
				</div>
			</div>

			<div className='hidden w-full md:flex items-center justify-center md:gap-8 xl:gap-20 flex-col md:flex-row'>
				{CardData3.map((card, index) => (
					<CardArt
						key={index}
						id={card.id}
						title={card.title}
						picture={card.picture}
						date={card.date}
						button={card.button}
					/>
				))}
			</div>

			<div className='md:hidden w-full flex items-center justify-center gap-20 flex-col md:flex-row'>
				<Carousel />
			</div>
		</section>
	);
};

export default Articles;