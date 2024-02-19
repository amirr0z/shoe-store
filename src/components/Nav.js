"use client";
import Link from "next/link";
import { useState } from "react";
export default function Nav(props) {
    const [menu, setMenu] = useState(true);
    const menuClick = () => {
        setMenu(!menu);
        if (menu) {
            document.getElementById("menu").classList.remove("hidden");
        } else {
            document.getElementById("menu").classList.add("hidden");
        }
    };
    return (
        <div className="flex flex-col pt-2 items-center sticky top-0 bg-white z-40">
            <div className="flex flex-row justify-between w-full items-center px-4">
                <div className="text-2xl font-extrabold flex flex-row gap-1 items-center">
                    <svg
                        fill="#000000"
                        width="30px"
                        height="30px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>shoe-prints</title>
                        <path d="M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693zM5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z"></path>
                    </svg>
                    <Link href="/">Shoe Store</Link>
                </div>

                <nav className="hidden grid-cols-3 gap-x-3 md:grid">
                    <Link href="/products">Products</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                <nav className="md:hidden block cursor-pointer relative">
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={menuClick}
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div
                        className="flex flex-col w-max p-3 absolute top-full right-0 border-2 border-solid border-zinc-800 z-50 rounded-lg bg-white hidden"
                        id="menu"
                    >
                        <Link
                            href="/products"
                            className="border-b-2 border-solid border-zinc-500 px-2 text-center cursor-pointer"
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className="border-b-2 border-solid border-zinc-500 px-2 pt-1 text-center cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className=" px-2 text-center pt-1 cursor-pointer"
                        >
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="flex flex-row w-full mt-2 ">
                <div className="h-0.5 bg-gradient-to-r from-transparent to-black w-1/2"></div>
                <div className="h-0.5 bg-gradient-to-r from-black to-trasparent w-1/2"></div>
            </div>
        </div>
    );
}
