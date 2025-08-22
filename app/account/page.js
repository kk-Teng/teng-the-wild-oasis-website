import { auth } from "@/app/_lib/auth";

export async function generateMetadata() {
    const session = await auth()
    return {
        title: `Welcome ! ${ session.user.name }`
    }
}

export default async function Page() {
    const session = await auth()
    return (
        <div className={ 'font-semibold text-yellow-400 text-2xl mb-7' }>
            Welcome, { session.user.name }
        </div>
    )
}
