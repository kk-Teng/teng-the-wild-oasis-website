import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
    return (
        <div>
            <header
                className={ 'px-12 py-8 mx-auto max-w-7xl border-b border-b-slate-600 flex justify-between items-center text-slate-100' }
            >
                <Logo />
                <Navigation />
            </header>
        </div>
    );
}