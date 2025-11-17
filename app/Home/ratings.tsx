"use client";
import React,{useEffect, useRef, useState} from "react";



export default function Ratings(){
    const [displayvalue1, setdisplayvalue1] = useState(0);
    const [displayvalue2, setdisplayvalue2] = useState(0);
    const [displayvalue3, setdisplayvalue3] = useState(0);
    const [displayvalue4, setdisplayvalue4] = useState(0);
    const [onDisplay, setonDisplay] = useState(false);
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([element]) => {
            if(element.isIntersecting){
                setonDisplay(true);
                console.log("in view");
            }
            else{
                console.log("out of view");
            }
        })

        const Parent = container.current;
        if(!Parent) return ;
        observer.observe(Parent);
    },[])

    useEffect(() => {
        if(displayvalue1 <= 165 && onDisplay)
        setTimeout(() => {setdisplayvalue1((prev) => prev+1)},12);
    },[displayvalue1,onDisplay])

    useEffect(() => {
        if(displayvalue2 <= 121 && onDisplay)
        setTimeout(() => {setdisplayvalue2((prev) => prev+1)},18);
    },[displayvalue2,onDisplay])

    useEffect(() => {
        if(displayvalue3 <= 16 && onDisplay)
        setTimeout(() => {setdisplayvalue3((prev) => prev+1)},100);
    },[displayvalue3,onDisplay])

    useEffect(() => {
        if(displayvalue4 <= 28 && onDisplay)
        setTimeout(() => {setdisplayvalue4((prev) => prev+1)},80);
    },[displayvalue4,onDisplay])

    return(<div className="relative w-full py-20 h-auto bg-black/98 flex justify-center items-center">
        <div className="relative w-[90%] px-4 max-w-7xl h-auto flex flex-col gap-2 lg:gap-6 lg:flex-row items-center justify-evenly" ref={container}>
            <div className="resize relative w-full h-42 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-[42px] text-blue-900/85 font-sans font-bold">{displayvalue1}+</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Retention Systems Deployed Across 12+ Industries</p>
            </div>
            <div className="resize relative w-full h-42 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-[42px] text-blue-900/85 font-sans font-bold">${displayvalue2} Million+</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Revenue Generated For Our Clients</p>
            </div>
            <div className="resize relative w-full h-42 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-[42px] text-blue-900/85 font-sans font-bold">{displayvalue3} Years+</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Average Client Lifecycle with VEX Media</p>
            </div>
            <div className="resize relative w-full h-42 px-2 my-auto rounded-2xl border border-white/25">
            <h1 className="text-center pt-6 text-[42px] text-blue-900/85 font-sans font-bold">{displayvalue4} Days</h1>
            <p className="text-center text-white/65 text-26px pb-3 pt-3">Average Time After Client Gets Financially Positive ROI</p>
            </div>
        </div>
    </div>)
}

