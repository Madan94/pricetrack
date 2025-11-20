import React from "react";
import Link from "next/link";
import Image from "next/image";

const navIcons=[
    {src:'/assets/icons/search.svg',alt:"search"},
    {src:'/assets/icons/black-heart.svg',alt:"heart"},
    {src:'/assets/icons/user.svg',alt:"user"}
]

const Navbar=()=>{
    return(
        <header className="w-full">
            <nav className="nav">
                <Link href="/" className="flex items-center gap-1">
                    <p className="text-2xl font-bold">Price<span className="text-red-700">Track</span></p>
                </Link>

                <div className="flex items-center gap-5">
                    {navIcons.map((icon)=>(
                        <Link href="/" key={icon.alt}>
                            <Image
                        key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        loading="lazy"
                        className="object-contain"
                        />
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;