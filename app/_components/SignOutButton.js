import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { doLogout } from "@/app/_action/auth";

function SignOutButton() {

    return (
        <form action={ doLogout }>
            <button
                type={ 'submit' }
                className='py-3 px-5 hover:bg-slate-800 cursor-pointer hover:text-slate-100 transition-colors flex items-center gap-4 font-semibold text-slate-200 w-full'
            >
                <ArrowRightOnRectangleIcon className='h-5 w-5 text-slate-600' />
                <span>Sign out</span>
            </button>
        </form>
    );
}

export default SignOutButton;
