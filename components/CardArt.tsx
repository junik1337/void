import Image from 'next/image';
import React from 'react';

interface Props {
	title: string;
	date: string;
	picture: string;
	id?: number;
	button: string;
}

const CardArt = ({ title, date, picture, id, button }: Props) => {
	return (
		<div className="card bg-base-100 w-[98%] md:w-96 min-h-[500px] shadow-xl ">
			<figure className='min-h-[220px]'>
				<Image
					src={picture}
					priority
					width={600}
					height={300}
					className='w-auto h-auto'
					alt="Shoes" />
			</figure>
			<div className="card-body gap-2 justify-between">
				<div className='flex flex-col'>
					<p className='text-sm w-20'>
						{date}
					</p>
					<h2 className="card-title h5-bold">
						{title}
					</h2>
				</div>
				<div className="card-actions justify-start">
					<button className="font-bold flex flex-row items-center gap-4">
						<p>{button}</p>
						<Image src="/right.svg" alt="arrow" width={20} height={20} className='w-auto h-auto' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardArt;