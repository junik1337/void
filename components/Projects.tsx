import React from 'react';
import Projects_Card from './Projects_Card';
import { CardData } from '@/constants';

const Projects = () => {
	return (
		<section
			id='projects'
			className=' flex-col flex items-center gap-20 py-12'
		>
			{CardData.map((card, index) => (
				<Projects_Card
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