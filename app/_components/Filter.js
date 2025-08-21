'use client'

import { FILTER_ALL, FILTER_KEY, FILTER_LARGE, FILTER_MEDIUM, FILTER_SMALL } from "@/app/_util/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default () => {

    const searchParams = useSearchParams()
    const activeFilter = searchParams.get(FILTER_KEY) || FILTER_ALL

    return (
        <div className="border border-slate-800">
            <FilterButton filter={ FILTER_ALL } activeFilter={ activeFilter }>
                All cabins
            </FilterButton>
            <FilterButton filter={ FILTER_SMALL } activeFilter={ activeFilter }>
                1 &mdash; 3
            </FilterButton>
            <FilterButton filter={ FILTER_MEDIUM } activeFilter={ activeFilter }>
                4 &mdash; 7
            </FilterButton>
            <FilterButton filter={ FILTER_LARGE } activeFilter={ activeFilter }>
                8 &mdash; 12
            </FilterButton>
        </div>
    )
}

function FilterButton({ filter, activeFilter, children }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const handleFilter = (filter) => {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set(FILTER_KEY, filter)
        router.push(`${ pathname }?${ newSearchParams.toString() }`, { scroll: false })
    }

    return (
        <button
            className={ `px-4 py-1 hover:bg-slate-800 cursor-pointer ${ filter === activeFilter ? 'bg-slate-800' : '' }` }
            onClick={ () => handleFilter(filter) }
        >
            { children }
        </button>
    )
}