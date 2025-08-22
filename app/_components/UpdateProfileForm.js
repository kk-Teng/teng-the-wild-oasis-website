'use client'

import { doUpdateGuest } from "@/app/_action/guest";
import SubmitButton from "@/app/_components/SubmitButton";
import { Suspense, useTransition } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
import SelectCountry from "@/app/_components/SelectCountry";
import { useRouter } from "next/navigation";

export default ({ countriesPromise, guest }) => {

    const { fullName, email, countryFlag, nationalID, nationality } = guest
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    function handleSubmitAction(formData) {
        startTransition(async () => {
            await doUpdateGuest(formData)
            startTransition(router.refresh)
        })
    }

    return (
        <form className="bg-slate-900 py-8 px-12 text-lg flex gap-6 flex-col" action={ handleSubmitAction }>
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    name={ 'fullName' }
                    defaultValue={ fullName }
                    disabled
                    className="px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    name={ 'email' }
                    defaultValue={ email }
                    disabled
                    className="px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    <img
                        src={ countryFlag }
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>
                <Suspense fallback={ <SpinnerMini /> }>
                    {/* TODO option的更新问题 */ }
                    <SelectCountry
                        isPending={ isPending }
                        name="nationality"
                        id="nationality"
                        className="disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm"
                        countriesPromise={ countriesPromise }
                        defaultCountry={ nationality }
                    />
                </Suspense>
            </div>

            <div className="space-y-2">
                <label htmlFor="nationalID">National ID number</label>
                <input
                    disabled={ isPending }
                    defaultValue={ nationalID }
                    name={ 'nationalID' }
                    className="px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton text={ 'Update profile' } pendingText={ 'Updating...' } />
            </div>
        </form>
    )
}