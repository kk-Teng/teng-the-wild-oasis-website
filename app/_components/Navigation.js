import HighLightNavLink from "@/app/_components/HighLightNavLink";
import { auth } from "@/app/_lib/auth";
import Guest from "@/app/_components/Guest";

export default async function Navigation() {
    const session = await auth()
    const isAuthenticated = session?.user !== undefined

    return (
        <ul className={ 'flex gap-16 z-10 items-center' }>
            <li>
                <HighLightNavLink
                    href={ 'cabins' }
                    highLightClassName={ 'text-yellow-500' }
                    normalClassName={ 'hover:text-yellow-500 transition-colors text-xl' }
                >
                    Cabins
                </HighLightNavLink>
            </li>
            <li>
                <HighLightNavLink
                    href={ 'about' }
                    highLightClassName={ 'text-yellow-500' }
                    normalClassName={ 'hover:text-yellow-500 transition-colors text-xl' }
                >
                    About
                </HighLightNavLink>
            </li>
            <li>
                {
                    <HighLightNavLink
                        href={ 'account' }
                        highLightClassName={ 'text-yellow-500' }
                        normalClassName={ 'hover:text-yellow-500 transition-colors text-xl' }
                    >
                        <Guest image={ session?.user?.image } text={ 'Guest Area' } />
                    </HighLightNavLink>
                }
            </li>
        </ul>
    );
}

