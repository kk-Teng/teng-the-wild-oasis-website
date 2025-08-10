'use client'
export default function Error({ error, reset }) {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold select-none'>Something went wrong!</h1>
            <p className='text-lg select-none'>{ error.message }</p>

            <button className='inline-block bg-yellow-500 cursor-pointer text-slate-800 px-6 py-3 text-lg'
                    onClick={ reset }>
                Try again
            </button>
        </main>
    );
}
