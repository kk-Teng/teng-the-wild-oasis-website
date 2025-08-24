'use client';
import { useFormStatus } from "react-dom";
import { useImperativeHandle } from "react";

export default function SubmitButton({ text, pendingText, ref }) {

    // TODO to get form status, submit component must be render within a form
    const { pending } = useFormStatus()

    useImperativeHandle(ref, () => ({ pending }))

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