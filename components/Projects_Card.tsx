import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { Button } from './ui/button';

interface Props {
	title: string;
	description: string;
	picture: string;
	PhotoPosition: string;
	id?: number;
}

const Projects_Card = ({ title, description, picture, PhotoPosition, id }: Props) => {
	return (
		<div className="card lg:card-side bg-base-100 shadow-xl justify-between w-[98%] flex flex-col-reverse lg:flex-row">
			{PhotoPosition === 'left' &&
				<div className="relative w-full ">
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
							<FaPlay className="text-mypurple w-[18px] h-[18px]" />
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
					<Button className="font-bold flex bg-transparent text-black hover:bg-transparent hover:border-2 hover:border-mypurple flex-row items-center gap-4">
						<p>En savoir plus</p>
						{id === 1
							?
							<FaExternalLinkAlt className="text-mypurple w-[18px] h-[18px]" />
							:
							<FaArrowRight className="text-mypurple w-[18px] h-[18px]" />
						}
					</Button>
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
							<FaPlay className="text-mypurple w-[18px] h-[18px]" />
						</button>
					}
				</div>
			}
		</div>
	);
};

export default Projects_Card;
