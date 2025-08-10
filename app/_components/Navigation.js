'use client'
import HighLightNavLink from "@/app/_components/HighLightNavLink";

export default function Navigation() {
    return (
        <ul className={ 'flex gap-16 z-10 items-center' }>
            <li>
                <HighLightNavLink href={ 'cabins' }
                                  highLightClassName={ 'text-yellow-500' }
                                  normalClassName={ 'hover:text-yellow-500 transition-colors text-xl' }
                >cabins</HighLightNavLink>
            </li>
            <li>
                <HighLightNavLink
                    href={ 'about' }
                    highLightClassName={ 'text-yellow-500' }
                    normalClassName={ 'hover:text-yellow-500 transition-colors text-xl' }
                >
                    about
                </HighLightNavLink>
            </li>
            <li>
                <HighLightNavLink
                    href={ 'account' }
                    highLightClassName={ 'text-yellow-500' }
                    normalClassName={ 'hover:text-yellow-500 transition-colors text-xl' }
                >
                    account
                </HighLightNavLink>
            </li>
        </ul>
    );
}

