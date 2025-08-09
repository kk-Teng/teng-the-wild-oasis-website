import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
    const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

    return (
        <div className="flex border-slate-800 border">
            <div className={ 'flex-grow border-r border-slate-800 relative' }>
                <Image
                    fill
                    src={ image }
                    alt={ `Cabin ${ name }` }
                    className="object-cover"
                />
            </div>

            <div className="flex-grow">
                <div className="pt-5 pb-4 px-7 bg-slate-950">
                    <h3 className="text-yellow-500 font-semibold text-2xl mb-3">
                        Cabin { name }
                    </h3>

                    <div className="flex gap-3 items-center mb-2">
                        <UsersIcon className="h-5 w-5 text-slate-600" />
                        <p className="text-lg text-slate-200">
                            For up to <span className="font-bold">{ maxCapacity }</span> guests
                        </p>
                    </div>

                    <p className="flex gap-3 justify-end items-baseline">
                        { discount > 0 ? (
                            <>
                                <span className="text-3xl font-[350]">
                                  ${ regularPrice - discount }
                                </span>
                                <span className="line-through font-semibold text-slate-600">
                                  ${ regularPrice }
                                </span>
                            </>
                        ) : (
                            <span className="text-3xl font-[350]">${ regularPrice }</span>
                        ) }
                        <span className="text-slate-200">/ night</span>
                    </p>
                </div>

                <div className="bg-slate-950 border-t border-t-slate-800 text-right">
                    <Link
                        href={ `/cabins/${ id }` }
                        className="border-l border-slate-800 py-4 px-6 inline-block hover:bg-yellow-600 transition-all hover:text-slate-900"
                    >
                        Details & reservation &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CabinCard;
