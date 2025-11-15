"use client";
import React,{useEffect, useRef, useState} from "react";
import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})


export default function ClientReviews(){

    useEffect(() => {

    },[])

    return(<div className="relative w-full pt-30 pb-100 h-auto flex flex-col justify-center items-center bg-black/98">
        <div className="relative w-full max-w-220 mx-2 md:mx:6 flex flex-col justify-center items-center">
            <h1 className="text-white/90 text-4xl lg:text-5xl"><span className={`${cormorant.className} text-[40px] lg:text-[52px] text-blue-700/90`}><span className="text-[43px] lg:text-[56px]">C</span>lient </span>Reviews</h1>
            <p className="text-white/65 mt-4 text-center text-[12px] px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda dicta, nihil magnam eaque cumque vitae eius tempora sunt maxime minima eos aut rerum eligendi ipsam e adipisci autem, necessitatibus nemo explicabo, quos eaque voluptatibus, minima odit cum corrupti quasi rerum repellat quis optio eligendi.</p>
        </div>

        <div className="relative w-[90%] mt-30 mx-auto pb-30 h-full min-h-100 flex justify-center items-center">   
        {/* Center Msg */}
        <div className="relative w-30 h-30 flex justify-center items-center">
            <div className="relative w-20 h-20 flex justify-center items-center bg-white/20 rounded-full">
                <div className="relative w-12 mr-1.5 mt-1.5 h-10 scale-80 lg:scale-90">
                    <div className="absolute left-1 top-1 h-[80%] w-[80%] bg-white rounded-2xl z-2"></div>
                    <div className="absolute -top-px -right-px w-[95%] h-[90%] rounded-[13px] bg-black z-1" />
                    <div className="relative w-12 h-12 mask-[url('/message3.png')] bg-blue-600 mask-cover z-3" />
                    <div className="absolute -top-2 -right-1.5 w-full h-[90%] bg-white/85 rounded-xl" />
                </div>
            </div>
            <div className="absolute w-20 h-20 rounded-full shadow-[0px_6px_22px_rgba(37,99,235,0.6)]" />
        </div>
        {/* Users */}

        <div className="user2 absolute hidden md:block w-12 h-12 rounded-full bg-[url('/users/user2.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user3 absolute hidden md:block transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user3.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user4 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user4.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user5 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user5.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user6 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user6.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user7 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user7.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user8 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user8.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user9 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user5.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user10 absolute hidden md:block transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user6.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user11 absolute hidden md:block transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user7.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user12 absolute hidden md:block transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user7.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user13 absolute hidden md:block transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user8.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user14 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user5.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        <div className="user15 absolute transition-all duration-800 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full bg-[url('/users/user6.PNG')] bg-cover bg-center group">
            <div className="absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 hidden group-hover:block">
            <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
            <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
            </div>
        </div>

        </div>

    </div>)
}

