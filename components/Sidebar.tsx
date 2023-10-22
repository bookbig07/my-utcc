"use client";
import React from 'react'
import utccIcon from '@/public/utcc-icon.png'
import Image from 'next/image';
import { IoDocumentText , IoExit } from "react-icons/io5";

function Sidebar() {
    return (
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 bg-white hover:shadow-lg transition duration-300 ease-in-out">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                <div>
                    <div className="w-max p-2.5 flex items-center space-x-2">
                        <Image src={utccIcon} alt="UTCC Icon" width={36} height={36} />
                        <span className="font-medium">UTCC</span>
                    </div>
                    <ul className="mt-6 space-y-2 tracking-wide">
                        <li className="min-w-max">
                            <div className="relative flex items-center space-x-4 px-4 py-3 text-gray-900 cursor-pointer hover:bg-slate-100 transition duration-300 ease-in-out">
                                <IoDocumentText className="-ml-1 h-6 w-6"/>
                                <span className="-mr-1 font-medium">Course Transfer</span>
                            </div>
                        </li>
                        <li className="min-w-max">
                            <div className="relative flex items-center space-x-4 px-4 py-3 text-gray-900 cursor-pointer hover:bg-slate-100 transition duration-300 ease-in-out">
                                <IoExit className="-ml-1 h-6 w-6"/>
                                <span className="-mr-1 font-medium">Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar