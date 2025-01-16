"use client";
import Link from "next/link";
import "boxicons/css/boxicons.min.css"
import { useState } from "react";

const navLink = [
    { href: "/", name: "Home" },
    { href: "/faq", name: "faq" },
    { href: "/about", name: "About" }
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="fixed top-5 left-0 w-full z-50">
            <div className="container xl:w-full w-[90%] mx-auto flex justify-between bg-textcolor px-6 py-4 rounded-full">
                <Link href={"/"} className="text-xl text-containercolor font-bold">Kopisop</Link>

                <div className="md:flex items-center gap-x-6 hidden">
                    {navLink.map((link, index) => (
                        <Link className="text-textaltercolor text-sm font-poppins hover:text-containercolor" key={index} href={link.href}>{link.name}</Link>
                    ))}
                </div>

                <div className="flex items-center gap-x-4">
                    <button><i className="bx bx-user text-xl text-bgcolor"></i></button>
                    <button><i className="bx bx-shopping-bag text-xl text-bgcolor"></i></button>
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <i className="bx bx-x text-xl text-bgcolor"></i>
                        ) : (
                            <i className="bx bx-menu text-xl text-bgcolor"></i>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen ? (
                <div className="absolute top-[110%] left-[50%] -translate-x-1/2 w-[90vw] bg-textcolor flex flex-col items-center py-5 px-0 rounded-xl md:hidden">
                    {navLink.map((link, index) => (
                        <Link onClick={toggleMenu} className="text-textaltercolor text-sm font-poppins hover:text-containercolor block my-4 mx-0" key={index} href={link.href}>{link.name}</Link>
                    ))}
                </div>
            ) : null}

        </div>
    )
}