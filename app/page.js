import Link from "next/link";
import Image from "next/image";
import background from "@/public/bg.png";

export default function Page() {
    return (
        <div className={ 'w-full h-full flex items-center justify-center gap-10 text-slate-50 flex-col mt-24' }>
            <Image
                fill
                src={ background }
                alt={ 'the world wild oasis background' }
                placeholder={ 'blur' }
                className={ 'absolute h-screen w-screen opacity-30 object-cover' }
            />
            <h1 className={ 'text-8xl select-none font-normal text-center' }>Welcome to paradise</h1>
            <Link href={ '/cabins' }
                  className={ 'z-10 bg-yellow-500 px-8 py-4 text-slate-700 hover:bg-yellow-600 hover:text-slate-50 transition-colors' }>
                Explore luxury cabins
            </Link>
        </div>
    );
}

// TODO 013 What are React Server Components (RSC – Part 1)
// TODO 017 How RSC Works Behind the Scenes (RSC – Part 2)
// TODO 018 RSC vs. SSR How are They Related (RSC – Part 3)