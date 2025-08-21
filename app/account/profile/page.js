import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
    title: 'profile'
}

export default function Page() {
    // CHANGE
    const nationality = "portugal";

    return (
        <div>
            <h2 className="font-semibold text-2xl text-yellow-400 mb-4">
                Update your guest profile
            </h2>

            <p className="text-lg mb-8 text-slate-200">
                Providing the following information will make your check-in process
                faster and smoother. See you soon!
            </p>

            <UpdateProfileForm>
                <SelectCountry
                    name="nationality"
                    id="nationality"
                    className="px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm"
                    defaultCountry={ nationality }
                />
            </UpdateProfileForm>
        </div>
    );
}
