'use client';

import { links } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface props {
	links: links[];
}

const NavItems = ({ links }: props) => {
	const pathname = usePathname();

	return (
		<ul className="myscreen:flex-between hidden myscreen:flex w-full flex-col items-start gap-5 myscreen:flex-row text-black">
			{links.map((link, index) => {
				const isActive = pathname === link.route;

				return (
					<button
						key={index}
						className={`${isActive && 'text-primary'} flex-center p-semibold-12 xl:p-bold-16 whitespace-nowrap`}
					>
						<Link className='text-black hover:text-mypurple' href={link.route}>{link.label}</Link>
					</button>
				);
			})}
		</ul>
	);
};

export default NavItems;