import Link from "next/link";

export default function Navigation() {
    return (
        <ul className={ 'flex gap-16 z-10 items-center' }>
            <li>
                <Link href={ "cabins" } className={ 'hover:text-yellow-500 transition-colors' }>cabins</Link>
            </li>
            <li>
                <Link href={ "about" } className={ 'hover:text-yellow-500 transition-colors text-xl' }>about</Link>
            </li>
            <li>
                <Link href={ "account" } className={ 'hover:text-yellow-500 transition-colors' }>guest area</Link>
            </li>
        </ul>
    );
}
