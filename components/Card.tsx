import Image from 'next/image';
import React from 'react';

interface Props {
	title: string;
	description: string;
	picture: string;
	PhotoPosition: string;
	id?: number;
}

const Card = ({ title, description, picture, PhotoPosition, id }: Props) => {
	return (
		<div className="card lg:card-side bg-base-100 shadow-xl w-[98%] flex flex-col-reverse lg:flex-row">
			{PhotoPosition === 'left' &&
				<div className="relative w-full lg:w-1/2">
					<Image
						src={picture}
						width={700}
						height={500}
						priority
						alt="Album"
						className="w-full h-full object-cover"
					/>
					{id !== 1 &&
						<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EFEFEF] w-14 h-14 rounded-full flex items-center justify-center z-10">
							<Image src="/play.svg" alt="play" width={20} height={20} className='w-auto h-auto' />
						</button>
					}
				</div>
			}

			<div className="card-body max-w-xl text-black">
				<h2 className="card-title h3-bold">
					{title}
				</h2>
				<p>{description}</p>
				<div className="card-actions justify-start">
					<button className="font-bold flex flex-row items-center gap-4">
						<p>En savoir plus</p>
						{id === 1
							?
							<Image src="/redirect.svg" alt="arrow" width={20} height={20} className='w-auto h-auto' />
							:
							<Image src="/right.svg" alt="arrow" width={20} height={20} className='w-auto h-auto' />
						}
					</button>
				</div>
			</div>

			{PhotoPosition === 'right' &&
				<div className="relative w-full lg:w-1/2">
					<Image
						src={picture}
						priority
						width={700}
						height={500}
						alt="Album"
						className="w-full h-full object-cover"
					/>
					{id !== 1 &&
						<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EFEFEF] w-14 h-14 rounded-full flex items-center justify-center z-10">
							<Image src="/play.svg" alt="play" width={20} height={20} className='w-auto h-auto' />
						</button>
					}
				</div>
			}
		</div>
	);
};

export default Card;
