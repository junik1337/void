'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CardData3 } from '@/constants';
import CardArt from './CardArt';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? 3 - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const handleNext = () => {
		const isLastSlide = currentIndex === 3 - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="w-full overflow-x-hidden">
				<div
					className="flex transition-transform duration-500"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{CardData3.map((card, index) => (
						<div className="min-w-full" key={index}>
							<CardArt
								company={card.company}
								key={index}
								id={card.id}
								title={card.title}
								picture={card.picture}
								date={card.date}
								button={card.button}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="absolute bottom-0 top-[530px] left-0 right-0 flex justify-between items-center px-5">
				<div>{currentIndex + 1}/3</div>
				<div className='flex justify-center items-center gap-6'>
					<button
						onClick={handlePrev}
						className="text-mypurple flex justify-center items-center w-9 h-9 border border-mypurple rounded-full shadow-lg"
					>
						<Image src="/right.svg" alt="arrow" width={20} height={20} priority className='-scale-x-100 w-[20px] h-[20px]' />
					</button>
					<button
						onClick={handleNext}
						className="text-mypurple flex justify-center items-center border w-9 h-9 border-mypurple rounded-full shadow-lg"
					>
						<Image src="/right.svg" alt="arrow" width={20} height={20} className='w-[20px] h-[20px]' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
