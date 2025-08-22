'use server'
import Image from "next/image";
import { doSocialLogin } from "@/app/_action/auth";

async function SignInButton() {
    return (
        <form action={ doSocialLogin }>
            <button
                name={ 'action' }
                value={ 'github' }
                type={ 'submit' }
                className='cursor-pointer flex items-center gap-6 text-lg border border-slate-300 px-10 py-4 font-medium'>
                <Image
                    src='https://authjs.dev/img/providers/github.svg'
                    alt='github logo'
                    height='24'
                    width='24'
                />
                <span>Continue with GitHub</span>
            </button>
        </form>
    );
}

export default SignInButton;
