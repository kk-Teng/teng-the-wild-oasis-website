import Cabins from "@/app/cabins/Cabins";
import Loading from "@/app/cabins/_loading";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";

export const revalidate = 15

export default async function Page() {

    // TODO  always refresh <==> revalidate = 0
    unstable_noStore()

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
            <Suspense fallback={ <Loading /> }>
                <Cabins />
            </Suspense>
        </div>
    );
}
