import React from 'react';
import CardVer from './CardVer';
import { CardData2 } from '@/constants';

const Subjects = () => {
	return (
		<section
			id='projects'
			className='flex-col md:flex-row justify-center flex items-center flex-wrap gap-20 py-12'
		>
			{CardData2.map((card, index) => (
				<CardVer
					key={index}
					id={card.id}
					title={card.title}
					description={card.description}
					picture={card.picture}
					button={card.button}
				/>
			))}
		</section>
	);
};

export default Subjects;