"use client";
import React,{useEffect, useRef, useState} from "react";



export default function Ratings(){
    const [displayvalue1, setdisplayvalue1] = useState(0);
    const [displayvalue2, setdisplayvalue2] = useState(0);
    const [displayvalue3, setdisplayvalue3] = useState(0);
    const [displayvalue4, setdisplayvalue4] = useState(0);

    useEffect(() => {
        requestAnimationFrame(() => {});
    },[])

    return(<div className="relative w-full py-20 h-auto bg-black/98 flex justify-center items-center">
        <div className="relative w-[90%] px-4 max-w-7xl h-auto flex flex-col gap-2 lg:gap-6 lg:flex-row items-center justify-evenly">
            <div className="resize relative w-full h-38 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-5xl text-blue-900/85 font-bold">{displayvalue1}+</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Retention Systems Deployed Across 12+ Industries</p>
            </div>
            <div className="resize relative w-full h-38 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-5xl text-blue-900/85 font-bold">${displayvalue2} Million+</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Revenue Generated For Our Clients</p>
            </div>
            <div className="resize relative w-full h-38 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-5xl text-blue-900/85 font-bold">{displayvalue3} Years+</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Average Client Lifecycle with VEX Media</p>
            </div>
            <div className="resize relative w-full h-38 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-5xl text-blue-900/85 font-bold">{displayvalue4} Days</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Average Time After Client Gets Financially Positive ROI</p>
            </div>
        </div>
    </div>)
}

   