import Image from 'next/image';
import React from 'react';

interface Props {
	title: string;
	description: string;
	picture: string;
	id?: number;
	button: string;
}

const RapportCard = ({ title, description, picture, id, button }: Props) => {
	return (
		<div className="card bg-base-100 w-[98%] md:w-96 md:min-h-[720px] shadow-xl ">
			<figure className='min-h-[220px]'>
				<Image
					src={picture}
					width={600}
					height={300}
					className='w-auto h-auto'
					alt="Shoes" />
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
						{id === 2
							?
							<Image src="/right.svg" alt="arrow" width={20} height={20} className='w-auto h-auto' />
							:
							<Image src="/redirect.svg" alt="arrow" width={20} height={20} className='w-auto h-auto' />
						}
					</button>
				</div>
			</div>
		</div>
	);
};

export default RapportCard;