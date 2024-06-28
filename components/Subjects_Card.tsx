import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

interface Props {
	title: string;
	description: string;
	picture: string;
	id?: number;
	button: string;
}

const Subjects_Card = ({ title, description, picture, id, button }: Props) => {
	return (
		<div className="card bg-base-100 w-[98%] md:w-96 md:min-h-[720px] shadow-xl ">
			<figure className='min-h-[220px] relative'>
				<Image
					src={picture}
					width={600}
					height={300}
					className='w-auto h-auto'
					alt="Shoes" />
				{id !== 2 && (
					<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EFEFEF] w-14 h-14 rounded-full flex items-center justify-center z-10">
						<FaPlay className="text-mypurple w-[18px] h-[18px]" />
					</button>
				)}
			</figure>
			<div className="card-body gap-2">
				<h2 className="card-title">
					{title}
				</h2>
				<p>
					{description}
				</p>
				<div className="card-actions justify-start">
					<button className="font-bold flex flex-row items-center gap-4">
						<p>{button}</p>
						<FaArrowRight className="text-mypurple w-[18px] h-[18px]" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subjects_Card;