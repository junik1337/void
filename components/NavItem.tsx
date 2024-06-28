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
		<ul className="myscreen:flex-between hidden myscreen:flex w-full flex-col items-start gap-5 myscreen:flex-row">
			{links.map((link) => {
				const isActive = pathname === link.route;

				return (
					<button
						key={link.route}
						className={`${isActive && 'text-primary'} flex-center p-semibold-12 xl:p-bold-16 whitespace-nowrap bg-transparent text-black border-mypurple hover:text-mypurple`}
					>
						<Link href={link.route}>{link.label}</Link>
					</button>
				);
			})}
		</ul>
	);
};

export default NavItems;