// TODO How to distinguish whether a component is a server component

'use client';

import { useState } from "react";

export default function Counter({ children }) {
    const [count, setCount] = useState(0)
    console.log('counter')
    return (
        <div onClick={ () => setCount(count => count + 1) }>
            { count }
        </div>
    );
}