import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItem';
import { L_headerLinks, R_headerLinks } from '@/constants';
import MobileNav from './MobileNav';

const Header = () => {
	return (
		<header className='wrapper h-full self-center '>
			<div className="flex h-full w-full items-center justify-between">
				<div className='flex-center gap-7'>
					<MobileNav />
					<Link href="/">
						<p className='min-w-[88px] min-h-[34px] font-bold text-4xl'>
							Logo
						</p>
					</Link>
					<nav className='flex gap-4 items-center justify-center'>
						<NavItems links={L_headerLinks} />
					</nav>
				</div>

				<nav className='flex gap-4 items-center justify-center'>
					<NavItems links={R_headerLinks} />
					<Image
						src={'/Vector.svg'}
						alt='search'
						width={19}
						height={19}
						priority
						className='myscreen:m-3 h-auto w-auto'
					/>
					<div className='hidden w-full md:flex p-bold-16 flex-row items-center justify-center gap-2'>
						<Image
							src={'/Global.svg'}
							alt='search'
							width={19}
							height={19}
							className='h-auto w-auto'
						/>
						<p>Global</p>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;