'use client';
import { useFormStatus } from "react-dom";

export default function SubmitButton({ text, pendingText }) {

    // TODO to get form status, submit component must be render within a form
    const { pending } = useFormStatus()

    return (
        <button
            type={ 'submit' }
            disabled={ pending }
            className="bg-yellow-500 px-8 py-4 text-slate-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
            { pending ? pendingText : text }
        </button>
    );
}