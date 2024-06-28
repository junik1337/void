import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItem';
import { L_headerLinks, R_headerLinks } from '@/constants';
import { LuSearch } from 'react-icons/lu';
import MobileNav from './MobileNav';

const Header = () => {
	return (
		<header className='wrapper h-full'>
			<div className=" flex items-center justify-between">
				<div className='flex gap-7'>
					<Link href="/">
						<p className='min-w-[88px] min-h-[34px] font-bold text-4xl'>
							Logo
						</p>
					</Link>
					<nav className='hidden md:flex gap-4 flex-center'>
						<NavItems links={L_headerLinks} />
					</nav>
				</div>

				<nav className='hidden md:flex gap-4 flex-center'>
					<NavItems links={R_headerLinks} />
					<Image
						src={'/Vector.svg'}
						alt='search'
						width={20}
						height={20}
						className='m-4'
					/>
					<div className='flex p-bold-16 flex-row flex-center gap-2'>
						<Image
							src={'/Global.svg'}
							alt='search'
							width={20}
							height={20}
							className=''
						/>
						<p>Global</p>
					</div>
				</nav>

				<MobileNav />
			</div>
		</header>
	);
};

export default Header;