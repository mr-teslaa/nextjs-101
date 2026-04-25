'use client'

import { usePathname } from "next/navigation";

export default function Cart() {
    const pathname = usePathname()
    console.log(pathname);


    return (
        <div>Cart page</div>
    );
}