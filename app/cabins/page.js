import Cabins from "@/app/cabins/Cabins";
import Loading from "@/app/cabins/_loading";
import { Suspense } from "react";
import { DEFAULT_REVALIDATE, FILTER_ALL } from "@/app/_util/constants";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

// TODO 如果 noStore 和 revalidate同时存在，noStore生效
export const revalidate = DEFAULT_REVALIDATE

export default async function Page({ searchParams }) {

    // TODO  always refresh <==> revalidate = 0
    // noStore()
    const filter = (await searchParams)?.capacity || FILTER_ALL

    return (
        <div>
            <h1 className="text-4xl mb-5 text-yellow-400 font-medium">
                Our Luxury Cabins
            </h1>
            <p className="text-slate-200 text-lg mb-10">
                Cozy yet luxurious cabins, located right in the heart of the Italian
                Dolomites. Imagine waking up to beautiful mountain views, spending your
                days exploring the dark forests around, or just relaxing in your private
                hot tub under the stars. Enjoy nature's beauty in your own little home
                away from home. The perfect spot for a peaceful, calm vacation. Welcome
                to paradise.
            </p>
            <div className="flex justify-end mb-8">
                <Filter />
            </div>
            {/* key 让每一次筛选都 loading一次 */ }
            <Suspense fallback={ <Loading /> } key={ filter }>
                <Cabins filter={ filter } />
                <ReservationReminder />
            </Suspense>
        </div>
    );
}
