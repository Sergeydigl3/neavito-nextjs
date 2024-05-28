"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CardContent, Card } from "@/components/ui/card"


import Image from 'next/image'
import { useState } from "react"; // import state

// raddix crooss, and burger menu icon import 
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons"

export default function MyHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/final_logo.svg" // Path to your image
                        alt="Logo"
                        width={180} // width in pixels
                        height={32} // height in pixels
                        className="h-10 w-auto hidden md:block"
                    />
                    <Image
                        src="/final_logo_croped.svg" // Path to your image
                        alt="Logo"
                        width={180} // width in pixels
                        height={32} // height in pixels
                        className="h-10 w-auto md:show md:hidden"
                    />
                    <nav className="ml-10 hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a className="text-gray-500 hover:text-gray-900" href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-gray-900" href="#">
                                    Catalog
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-gray-900" href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-gray-900" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center">
                    <div className="relative mr-4">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            placeholder="Search products..."
                            type="text"
                        />
                    </div>

                    {/* <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 ml-4">Sign In</button>
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-200 ml-2">
                        Sign Up
                    </button> */}

                    <a className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 ml-4 hidden md:block " href="/sign-in">
                        Sign In
                    </a>
                    <a className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-200 ml-2 hidden md:block" href="/sign-up">
                        Sign Up
                    </a>
                </div>
                <div
                    className="md:hidden"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                    {isNavOpen ? 
                    <Cross2Icon className="h-9 w-9 p-1 text-gray-600 rounded-md border border-gray-200"/> 
                    : 
                    <HamburgerMenuIcon className="h-9 w-9 p-1 text-gray-600 rounded-md border border-gray-200" />
                    }
                </div>
            </div>
            <div className={isNavOpen ? "block" : "hidden"}>
                <nav className="bg-white md:hidden">
                    <ul className="flex flex-col space-y-2 items-center">
                        <li>
                            <a className="text-gray-500 hover:text-gray-900" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-500 hover:text-gray-900" href="#">
                                Catalog
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-500 hover:text-gray-900" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-500 hover:text-gray-900" href="#">
                                Contact
                            </a>

                        </li>
                        {/* adaptive 2 buttons row */}
                        <li className="flex flex-col space-y-2 items-center">
                            <a className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800" href="/sign-in">
                                Sign In
                            </a>
                            <a className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-200" href="/sign-up">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    )
}