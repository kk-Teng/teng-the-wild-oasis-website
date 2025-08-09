import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
    return (
        <div className={ 'grid gap-12 grid-cols-[16rem_1fr] h-full w-full' }>
            <SideNavigation />
            <div>{ children }</div>
        </div>
    );
}