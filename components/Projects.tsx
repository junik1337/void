import React from 'react';
import Card from './Card';
import { CardData } from '@/constants';

const Projects = () => {
	return (
		<section
			id='projects'
			className=' flex-col flex items-center gap-20 py-12'
		>
			{CardData.map((card, index) => (
				<Card
					key={index}
					id={card.id}
					title={card.title}
					description={card.description}
					picture={card.picture}
					PhotoPosition={card.PhotoPosition}
				/>
			))}
		</section>
	);
};

export default Projects;