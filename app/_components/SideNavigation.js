'use client';

import { CalendarDaysIcon, HomeIcon, UserIcon, } from '@heroicons/react/24/solid';
import SignOutButton from './SignOutButton';
import HighLightNavLink from "@/app/_components/HighLightNavLink";

const navLinks = [
    {
        name: 'Home',
        href: '/account',
        icon: <HomeIcon className='h-5 w-5 text-slate-600' />,
    },
    {
        name: 'Reservations',
        href: '/account/reservations',
        icon: <CalendarDaysIcon className='h-5 w-5 text-slate-600' />,
    },
    {
        name: 'Guest profile',
        href: '/account/profile',
        icon: <UserIcon className='h-5 w-5 text-slate-600' />,
    },
];

function SideNavigation() {
    return (
        <nav className='border-r border-slate-900'>
            <ul className='flex flex-col gap-2 h-full text-lg'>
                { navLinks.map((link) => (
                    <li key={ link.name }>
                        <HighLightNavLink
                            href={ link.href }
                            normalClassName={ 'py-3 px-5 hover:bg-slate-800 hover:text-slate-100 transition-colors flex items-center gap-4 font-semibold text-slate-200' }
                            highLightClassName={ 'bg-slate-800 text-slate-100' }
                            testIfHighLight={ (pathname, href) => pathname.endsWith(href) }
                        >
                            { link.icon }
                            <span>{ link.name }</span>
                        </HighLightNavLink>
                    </li>
                )) }

                <li className='mt-auto'>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    );
}

export default SideNavigation;
