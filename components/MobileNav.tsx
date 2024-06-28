import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { L_headerLinks, R_headerLinks } from '@/constants';
import Link from 'next/link';
import { Menu } from 'lucide-react';


const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger className='myscreen:hidden' asChild>
				<button>
					<Menu color='#7A00E6' />
				</button>
			</SheetTrigger>
			<SheetContent className='myscreen:hidden flex flex-col gap-6' side='left'>
				<SheetDescription>Logo</SheetDescription>
				<SheetTitle>Menu</SheetTitle>
				<div className='flex h-2/3 p-bold-16 flex-col justify-around gap-4 flex-center'>
					<div className='flex flex-col w-full h-full items-start justify-evenly'>
						{L_headerLinks.map((link, index) => (
							<button key={index} className='border-outline border-2 rounded-md'>
								<Link key={link.label} href={link.route} className="m-2" >
									{link.label}
								</Link>
							</button>
						))}
					</div>

					<div className='flex flex-col w-full h-full items-start justify-evenly'>
						{R_headerLinks.map((link, index) => (
							<button key={index} className='border-outline border-2 rounded-md'>
								<Link key={link.label} href={link.route} className="m-2" >
									{link.label}
								</Link>
							</button>
						))}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;