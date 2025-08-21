import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { use } from "react";
import { FILTER_LARGE, FILTER_MEDIUM, FILTER_SMALL } from "@/app/_util/constants";


export default function Cabins({ filter }) {
    const cabins = use(getCabins())

    if (cabins.length === 0) {
        return null
    }

    let displayedCabins = cabins
    if (filter === FILTER_SMALL) {
        displayedCabins = displayedCabins.filter(cabin => cabin.maxCapacity <= 3)
    }
    if (filter === FILTER_MEDIUM) {
        displayedCabins = displayedCabins.filter(cabin => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 7)
    }
    if (filter === FILTER_LARGE) {
        displayedCabins = displayedCabins.filter(cabin => cabin.maxCapacity >= 8)
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {
                displayedCabins.map((cabin) => (
                    <CabinCard cabin={ cabin } key={ cabin.id } />
                ))
            }
        </div>
    )
}