import { CardData3 } from '@/constants';
import React from 'react';
import CardArt from './CardArt';
import Carousel from './Carousel';
import { FaArrowRight } from 'react-icons/fa';

const Articles = () => {
	return (
		<section
			id='articles'
			className='w-full flex-col flex items-center gap-20 py-12'
		>
			<div className='flex flex-col md:flex-row justify-between w-full gap-5'>
				<h1 className='h2-bold max-w-56 self-start '>Entreprise Today</h1>
				<button className='flex flex-row h-fit gap-4 items-center justify-center'>
					<p className='p-bold-20 md:h5-bold'>Lisez nos derniers articles</p>
					<FaArrowRight className="text-mypurple w-[18px] h-[18px]" />
				</button>
			</div>

			<div className='hidden w-full md:flex items-center justify-center md:gap-8 xl:gap-20 flex-col md:flex-row'>
				{CardData3.map((card, index) => (
					<CardArt
						key={index}
						id={card.id}
						company={card.company}
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