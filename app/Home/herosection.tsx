"use client";
import {Cormorant_Garamond, Vend_Sans, Poppins} from "next/font/google";
import React,{useEffect, useRef, useState} from "react";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})

const vendsans = Vend_Sans({
    subsets: ['latin'],
    weight: ['400']
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400']
})

export default function HeroSection(){



    return(<div className="relative w-full pb-10 h-auto pt-40 flex flex-col justify-center -z-1 before:absolute before:inset-0 before:bg-black/98">

        {/* Heading Text */}
        <div className="relative mt-1 w-full h-auto flex justify-center">
        <div className="relative w-[80%] max-w-220 ">
            <div className={`relative mb-3 flex h-auto w-full justify-center text-white/75 ${poppins.className} text-[15px]`}>
                <span className="relative w-[50%] text-end">Hi! I'm Iqrar</span>
                <div className="relative w-0.5 mx-4 h-5 bg-white/70"></div>
                <span className="relative w-[50%] text-start">Based in Pakistan</span>
            </div>
            <div className={`text-white/98 mb-3 text-6xl font-medium text-center md:text-[72px] lg:text-[96px] ${vendsans.className}`}>
                <span className={`text-blue-800  ${cormorant.className}`}><span className="text-[65px] md:text-[74px] lg:text-[100px]">C</span>reative</span> Designer & Editor
            </div>
            <div className="relative w-full h-auto text-white/60 text-[13px] text-center">I help small brands grow online presence through social media marketing</div>
        </div>
        </div>

        {/* Center Image */}
        <div className="relative w-full mt-22 h-auto min-h-80  flex justify-center items-center">
            <div className="relative w-auto h-auto">
                <div className="absolute  origin-bottom-right -rotate-3 w-52 h-62 rounded-2xl bg-white/8 z-1" />
                <div className="absolute origin-bottom-right  rotate-1 w-52 h-62 rounded-2xl bg-white/60 z-2" />
                <div className="relative  origin-bottom-right rotate-5 w-52 h-62 rounded-2xl bg-blue-950 z-3" />
                <div className="absolute bottom-4 -right-16 w-25 h-25 z-5 flex justify-center items-center ">
                    <div className="absolute pt-1 w-10 h-10 rounded-full bg-white/80 text-black text-xl flex justify-center items-center">🡣</div>
                    <svg className="relative w-full h-full">
                    <defs>
                        <path id="circlePath" d="M60,50 m-50,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
                    </defs>
                    <text fontSize="16" fontWeight="bold" fill="white" className="text-sm">
                        <textPath href="#circlePath" startOffset="50%" textAnchor="middle" className="text-[9px]">
                        THIS IS A REVLOVING TEXT CONTENT SECTION
                        </textPath>
                    </text>
                    </svg>
                </div>
            </div>
        </div>

        {/* Down Text Paras */}
        <div className="relative w-full h-80 mt-28  flex justify-center items-center">
            <div className="relative w-[90%] max-w-380 h-full flex flex-col sm:flex-row items-start">
                <div className={`relative w-full sm:w-[75%] h-full sm:px-[10%] text-3xl font-medium ${vendsans.className} text-white/85`}>
                I build designs that <span className="text-blue-700/85">solve problems</span>, inspire actions, and drive success</div>
                <div className="relative w-[50%] sm:w-[35%] h-full">
                <div className="text-[18px] text-white/85">I build designs that solve problems, inspire actions, and drive success</div>
                <button className="rounded-full mt-3 px-6 py-2 text-[12px] lg:text-[14px] radialgradient text-black">Contact Me ⟶</button></div>
            </div>
        </div>

    </div>)
}
