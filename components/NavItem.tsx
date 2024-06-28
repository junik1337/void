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
		<ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
			{links.map((link) => {
				const isActive = pathname === link.route;

				return (
					<button
						key={link.route}
						className={`${isActive && 'text-primary'}
							} flex-center p-bold-16 whitespace-nowrap border-outline`}
					>
						<Link href={link.route}>{link.label}</Link>
					</button>
				);
			})}
		</ul>
	);
};

export default NavItems;