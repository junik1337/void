import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItem';
import { L_headerLinks, R_headerLinks } from '@/constants';
import MobileNav from './MobileNav';
import Search from './Search/Search';
import { FaGlobe } from 'react-icons/fa';
import { Button } from './ui/button';

const Header = () => {
	return (
		<header className='wrapper h-full self-center '>
			<div className="flex h-full w-full items-center justify-between">
				<div className='flex-center gap-5'>
					<MobileNav />
					<Link href="/">
						<p className='min-w-[88px] min-h-[34px] font-bold text-4xl'>
							Logo
						</p>
					</Link>
					<nav className='flex gap-2 items-center justify-center'>
						<NavItems links={L_headerLinks} />
					</nav>
				</div>

				<nav className='flex gap-2 items-center justify-center'>
					<NavItems links={R_headerLinks} />
					<Search />
					<Button className='hidden bg-transparent text-black border-mypurple hover:text-white w-full md:flex p-bold-16 flex-row items-center justify-center gap-2'>
						<FaGlobe className="text-mypurple w-[18px] h-[18px]" />
						<p>Global</p>
					</Button>
				</nav>
			</div>
		</header>
	);
};

export default Header;