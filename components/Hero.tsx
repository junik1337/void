import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section
			id='hero'
			className='w-screen h-[700px] justify-between flex-col lg:flex-row overflow-hidden flex items-center xl:justify-around '
		>
			<div className='rounded-lg bg-white top-[30%] lg:top-auto md:left-[10%] absolute z-10 w-[90%] lg:max-w-xl h-[460px] justify-between p-8 gap-4 flex flex-col'>
				<p className='text-[44px] font-bold tracking-normal leading-loose' style={{ lineHeight: '1.75' }}>
					Journée des maladies
					rares 2024 : L'équité en
					action
				</p>
				<p className='w-[90%] text-sm'>
					À l'occasion de la Journée des maladies rares, il est plus important que
					jamais de continuer à rechercher un diagnostic, une innovation, un
					soutien et un accès équitables pour les personnes atteintes de maladies
					rares.
				</p>
				<Button className='max-w-36 p-3 bg-mypurple'>
					En savoir plus
				</Button>
			</div>
			<Image
				src='/background.jpeg'
				alt='hero'
				width={1920}
				height={1080}
				className="object-center -translate-y-5 xl:w-full h-auto w-auto"
			/>
		</section>
	);
};

export default Hero;