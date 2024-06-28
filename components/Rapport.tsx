import { CardData5 } from '@/constants';
import Image from 'next/image';
import React from 'react';
import RapportCard from './RapportCard';

const Rapport = () => {
	return (
		<section
			id='rapport'
			className='flex-col md:flex-row justify-center flex items-center flex-wrap gap-20 py-12'
		>
			<div className='flex flex-col md:flex-row justify-between w-full gap-5'>
				<h1 className='h2-bold w-fit self-start '>Découvrir plus</h1>
			</div>

			<div className='w-full flex items-center justify-center gap-8 xl:gap-20 flex-col md:flex-row'>
				{CardData5.map((card, index) => (
					<RapportCard
						key={index}
						id={card.id}
						title={card.title}
						picture={card.picture}
						button={card.button}
						description={card.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Rapport;