import { getCabin, getCabins } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

// TODO data will be always new for every request when revalidate equals to 0. You can think it's interval of fetching data from server to fresh page.
// TODO seconds
export const revalidate = 15

// TODO dynamic metadata
// function's params only contain params and searchParams and both of them are promise
export async function generateMetadata({ params }) {
    const { cabinId } = await params
    const { name } = await getCabin(cabinId);
    return {
        title: `Cabin: ${ name }`
    }
}

// TODO dynamic route pre-rendered, execute when accessing this page
export async function generateStaticParams() {
    const cabins = await getCabins()
    const cabinIds = cabins.map(cabin => ({
        cabinId: String(cabin.id)
    }))
    return cabinIds
}


export default async function Page({ params }) {

    const { cabinId } = await params

    const cabin = await getCabin(cabinId)

    return (
        <div className="max-w-7xl mx-auto select-none mt-8">

            <Cabin cabin={ cabin } />

            <div className={ 'mb-12' }>
                <h2 className="text-yellow-500 mb-12 text-5xl font-semibold text-center">
                    Reserve { cabin.name } today. Pay on arrival.
                </h2>
                <Suspense fallback={ <Spinner /> }>
                    <Reservation cabin={ cabin } />
                </Suspense>
            </div>
        </div>
    );
}
