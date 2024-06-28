import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section
			id='hero'
			className='relative w-screen h-[700px] justify-start items-center flex-col lg:flex-row overflow-hidden flex xl:justify-around'
		>
			<div
				className='rounded-lg bg-white bottom-0 lg:bottom-auto xl:-translate-x-96 absolute z-10 w-[90%] sm:max-w-xl h-fit max-h-[500px] justify-between p-8 gap-4 flex flex-col'>
				<p
					className='text-[32px] font-bold sm:h2-bold1 tracking-normal leading-loose'
					style={{ lineHeight: '1.75' }}
				>
					Journée des maladies
					rares 2024 : L&apos;équité en
					action
				</p>
				<p className='w-[90%] text-sm'>
					À l&apos;occasion de la Journée des maladies rares, il est plus important que
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
				priority
				width={1920}
				height={1080}
				className="object-center -translate-y-5 w-full h-[48%] sm:h-auto "
			/>
		</section>
	);
};

export default Hero;