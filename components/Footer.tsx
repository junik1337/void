import { footerLinks, IconLists } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full h-[230px]'>
			<div className='bg-black p-6 flex flex-col gap-8 md:flex-row flex-between text-white'>
				<Image src={'/Sanofi.svg'} alt='footer' width={80} height={25} />
				<div className='flex gap-20 flex-col md:flex-row items-center justify-center'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
						<p className='font-bold w-[122px]'>
							Suivez nous
						</p>
						<div className='flex w-full flex-wrap items-center justify-center gap-4'>
							{IconLists.map((icon, index) => (
								<div
									role='button'
									key={index}
									className='w-10  h-10 cursor-pointer flex justify-center items-center rounded-[20px] border'
								>
									<Image
										src={icon}
										alt={icon}
										width={19}
										height={19}
										className='w-auto h-auto'
									/>
								</div>
							))}
						</div>
					</div>
					<button className='flex flex-row gap-2'>
						<p>Haut de la page</p>
						<Image src={'/up.svg'} alt='up-arrow' width={14} height={16} />
					</button>
				</div>
			</div>

			<div className='w-full text-black flex gap-4 h-fit flex-col md:flex-row md:flex-wrap p-4'>
				{footerLinks.map((link, index) => (
					<button key={index} className='w-fit p-4 text-center text-nowrap'>
						{link.label}
					</button>
				
				))}
			</div>
			<p className='p-4 pl-8 w-full max-w-[300px]'>© Entreprise 2004-2024 - Tous droits réservés</p>
		</footer>
	);
};

export default Footer;