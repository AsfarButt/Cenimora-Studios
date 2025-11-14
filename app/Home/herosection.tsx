"use client";
import {Cormorant_Garamond, Vend_Sans} from "next/font/google";
import React,{useEffect, useRef, useState} from "react";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})

const josefin = Vend_Sans({
    subsets: ['latin'],
    weight: ['400']
})

export default function HeroSection(){



    return(<div className="relative w-full h-auto py-40 flex flex-col justify-center -z-1 before:absolute before:inset-0 before:bg-black/98">

        {/* Heading Text */}
        <div className="relative mt-1 w-full h-auto flex justify-center bg-white/5">
        <div className="relative w-[80%] max-w-180">
            <div className="relative mb-3 flex h-auto w-full justify-center text-white/75 text-[15px]">
                <span className="">Hi! I'm Iqrar</span>
                <div className="relative w-0.5 mx-4 h-5 bg-white/70"></div>
                <span className="">Based in Pakistan</span>
            </div>
            <div className={`text-white/98 mb-3 text-6xl font-medium text-center ${josefin.className}`}>
                <span className={`text-blue-800 ${cormorant.className}`}>Creative</span> Designer & Editor
            </div>
            <div className="relative w-full h-auto text-white/60 text-[13px] text-center">I help small brands grom online presence through social media marketing</div>
        </div>
        </div>

        {/* Center Image */}
        <div className="relative w-full h-auto min-h-80 bg-white/10 flex justify-center items-center">
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
        <div className="relative w-full h-80">
            <div className="relative w-[80%] max-w-280 h-full flex flex-row justify-center items-center">
                <div className="relative w-65% h-full bg-green-600/60 px-[10%] text-3xl font-medium">
                I build designs that <span className="">solve problems</span>, inspire actions, and drive success</div>
                <div className="relative w-35% h-full bg-red-600/60">
                <div className="">I build designs that solve problems, inspire actions, and drive success</div>
                <button className=""></button></div>
            </div>
        </div>

    </div>)
}
