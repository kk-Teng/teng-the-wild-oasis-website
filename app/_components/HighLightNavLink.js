'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default (
    {
        prefetch = true,
        children,
        href,
        normalClassName,
        highLightClassName,
        testIfHighLight = (pathname, href) => pathname.search(href) !== -1
    }) => {

    const pathname = usePathname()

    const className = `${ normalClassName } ${ (testIfHighLight(pathname, href) ? highLightClassName : "") }`

    return (
        <Link href={ href } className={ className } prefetch={ prefetch }>{ children }</Link>
    );
}