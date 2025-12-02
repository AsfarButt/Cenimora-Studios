"use client";
import React,{useRef, useState, useEffect} from "react";
import FeaturedProjects from "./featuredprojects";





export default function Page(){
    const featuredprojectsref = useRef<HTMLDivElement | null>(null);

    return(<div className="relative w-full h-auto flex flex-col items-center justify-center bg-black">

            {/* Hero Section */}
            <div className="relative w-[95%] min-h-200 px-2 sm:px-6 md:px-14 lg:px-32 h-auto flex flex-col lg:flex-row items-center justify-center">
                <div className="relative w-full pt-36 lg:pt-0 lg:w-[50%] h-auto text-white/90 text-center lg:text-left">
                    <h1 className="text-[28px] md:text-[32px] font-sans font-semibold">See our work</h1>
                    <h2 className="text-[16px] md:text-[18px] mt-4 lg:mt-0 text-white/80 lg:max-w-80">Browse the campaigns, edits, and brand stories we've created for our clients.</h2>
                    <button className="text-[16px] rounded-full bg-blue-950/95 p-1 px-2 mt-4" onClick={() => {featuredprojectsref.current?.scrollIntoView({ behavior: "smooth" });}}>View Projects <span className="text-[12px]">➔</span></button>
                </div>
                <div className="relative w-full py-10 lg:py-0 lg:w-[50%] h-auto scale-65 md:scale-75 lg:scale-80 xl:scale-100 flex flex-row gap-1 items-center justify-center">
                    <video className="w-60 h-100 rounded-2xl z-0 [box-shadow:0px_0px_30px_rgba(270,270,270,0.1)] border border-white/10" autoPlay muted loop>
                    <source src="/ourwork/video1.mp4" type="video/mp4"/>
                    </video>
                    <video className="w-70 h-120 rounded-2xl z-1" autoPlay muted loop>
                    <source src="/ourwork/video2.mp4" type="video/mp4"/>
                    </video>
                    <video className="w-60 h-100 rounded-2xl z-0 [box-shadow:0px_0px_30px_rgba(270,270,270,0.1)] border border-white/10" autoPlay muted loop>
                    <source src="/ourwork/video3.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>

            {/* Featured Projects */}
            <div className="relative w-full h-auto flex flex-col items-center justify-start bg-white/5">
                <h1 className="text-center text-white/95 font-sans font-semibold text-[32px]" ref={featuredprojectsref}>Featured Projects</h1>
                <FeaturedProjects />
            </div>
    </div>)
}