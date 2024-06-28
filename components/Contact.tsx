import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Contact = () => {
	return (
		<section id='contact' className='flex flex-col max-w-2xl gap-4 justify-center items-center py-12'>
			<h1 className='text-center h2-bold'>Construisez votre carrière avec Entreprise</h1>
			<p className='text-center text-sm'>Vous serez surpris de voir tout ce que vous pouvez accomplir chez Entreprise. Découvrez votre avenir ici.</p>
			<Button className='w-fit bg-mypurple text-white flex gap-2 items-center justify-center'>
				<FaExternalLinkAlt className='w-4 h-4' />
				Accéder au portail Carrières
			</Button>
		</section>
	);
};

export default Contact;