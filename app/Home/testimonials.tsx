"use client";
import React,{useEffect, useRef, useState} from "react";
import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})




export default function Testimonials(){
    const [Testimonials, setTestimonials] = useState<number[]>([]);
    const activeindex = useRef(0);
    const [activeproperties, setactiveproperties] = useState<string[]>([]);
    const [translateposition, settranslateposition] = useState("translate-x-0");

    useEffect(() => {
        const testimonials = Array(15).fill(0);
        const properties = Array(testimonials.length).fill(["scale-80 z-0"]);
        setactiveproperties(properties);
        setTestimonials(testimonials);
        activeindex.current = (testimonials.length-1)/2;
    },[])

    function MoveLeft(){
   
    }

    return(<div className="relative pt-20 w-full h-auto min-h-100 bg-black/98 flex flex-col justify-center">
                <h1 className="text-white/90 text-4xl lg:text-5xl text-center">What people say <span className={`${cormorant.className} text-[46px] lg:text-[58px] text-blue-700/90`}>about us</span></h1>

                <div className="relative mx-auto my-20 max-w-290 w-[90%] h-160 flex justify-center items-center bg-white overflow-hidden">
                    <div className={`relative w-auto h-[70%] bg-pink-600/25 flex flex-row items-center`}>
                        {Testimonials.map((element,index) => (
                            <div className="flex-none h-full w-75 mx-4 rounded-2xl bg-white/85 border border-black" key={index}></div>
                        ))}
                    </div>
                    <div className="absolute px-2 w-full h-14 flex justify-between items-center z-1 transition-all duration-600">
                        <button className="relative w-12 h-12 pr-3 text-black/90 text-2xl font-medium rounded-full bg-black/10">〈</button>
                        <button className="relative w-12 h-12 pl-3 text-black/90 text-2xl font-medium rounded-full bg-black/10">〉</button>
                    </div>
                </div>
    </div>)
}