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
    const length = 15;
    const [activeproperties, setactiveproperties] = useState<string[]>([]);
    const isDisabled = useRef(false);

    useEffect(() => {
        const testimonials = Array(length).fill(0);
        setTestimonials(testimonials);
        const actives3 = (activeindex.current-3+length)%length;
        const actives2 = (activeindex.current-2+length)%length;
        const actives1 = (activeindex.current-1+length)%length;
        const activep1 = (activeindex.current+1)%length;
        const activep2 = (activeindex.current+2)%length;
        const activep3 = (activeindex.current+3)%length;
        console.log("3 before Active Index: ",actives3);
        console.log("2 before Active Index: ",actives2);
        console.log("1 before Active Index: ",actives1);
        console.log("Active Index: ",activeindex.current);
        console.log("1 after Active Index: ",activep1);
        console.log("2 after Active Index: ",activep2);
        console.log("3 after Active Index: ",activep3);

        ChangePlacement(actives3, actives2, actives1, activeindex.current, activep1, activep2, activep3);
    },[])

    function MoveLeft(){
        activeindex.current = (activeindex.current-1+length)%length;
        const actives3 = (activeindex.current-3+length)%length;
        const actives2 = (activeindex.current-2+length)%length;
        const actives1 = (activeindex.current-1+length)%length;
        const activep1 = (activeindex.current+1)%length;
        const activep2 = (activeindex.current+2)%length;
        const activep3 = (activeindex.current+3)%length;
        console.log("3 before Active Index: ",actives3);
        console.log("2 before Active Index: ",actives2);
        console.log("1 before Active Index: ",actives1);
        console.log("Active Index: ",activeindex.current);
        console.log("1 after Active Index: ",activep1);
        console.log("2 after Active Index: ",activep2);
        console.log("3 after Active Index: ",activep3);

        ChangePlacement(actives3, actives2, actives1, activeindex.current, activep1, activep2, activep3);
    }

    function MoveRight(){
       activeindex.current = (activeindex.current+1)%length;
        const actives3 = (activeindex.current-3+length)%length;
        const actives2 = (activeindex.current-2+length)%length;
        const actives1 = (activeindex.current-1+length)%length;
        const activep1 = (activeindex.current+1)%length;
        const activep2 = (activeindex.current+2)%length;
        const activep3 = (activeindex.current+3)%length;
        console.log("3 before Active Index: ",actives3);
        console.log("2 before Active Index: ",actives2);
        console.log("1 before Active Index: ",actives1);
        console.log("Active Index: ",activeindex.current);
        console.log("1 after Active Index: ",activep1);
        console.log("2 after Active Index: ",activep2);
        console.log("3 after Active Index: ",activep3);

        ChangePlacement(actives3, actives2, actives1, activeindex.current, activep1, activep2, activep3);
    }

    function ChangePlacement(actives3: number, actives2: number, actives1: number, active: number, activep1: number, activep2: number, activep3: number){
        const array1 = Array(length).fill("z-0 scale-0 translate-x-120 blur-[2px]");
        array1[actives3] = "z-0 scale-0 -translate-x-120 blur-[6px]";
        array1[actives2] = "z-1 scale-60 -translate-x-100 blur-[5px]";
        array1[actives1] = "z-2 scale-80 -translate-x-70 blur-[3px]";
        array1[active] = "z-3 scale-100 translate-x-0";
        array1[activep1] = "z-2 scale-80 translate-x-70 blur-[3px]";
        array1[activep2] = "z-1 scale-60 translate-x-100 blur-[5px]";
        array1[activep3] = "z-0 scale-0 translate-x-120 blur-[6px]";

        setactiveproperties(array1);
        isDisabled.current = true;
        setTimeout(() => {isDisabled.current = false},400);

    }

    return(<div className="relative pt-20 w-full h-auto min-h-100 bg-black/98 flex flex-col justify-center overflow-hidden">
                <h1 className="text-white/90 text-4xl lg:text-5xl text-center">What people say <span className={`${cormorant.className} text-[46px] lg:text-[58px] text-blue-700/90`}>about us</span></h1>

                <div className="relative scale-80 sm:scale-90 md:scale-100 mx-auto my-20 max-w-290 w-[98%] h-160 flex justify-center items-center">
                    <div className={`relative w-75 h-[70%] flex flex-row items-center`}>
                        {Testimonials.map((element,index) => (
                            <div className={`absolute flex-none h-full w-75 mr-6 transition-all duration-800 bg-[radial-gradient(circle_at_center,rgba(0,128,255,1),rgba(0,64,160,1))] shadow-sm shadow-black/40 text-8xl font-bold text-center ${activeproperties[index]}`} key={index}>{index}</div>
                        ))}
                    </div>
                    <div className="absolute px-2 w-full h-14 flex justify-between items-center transition-all duration-600 z-10">
                        <button className="relative w-12 h-12 pr-3 text-white/90 text-2xl font-medium rounded-full bg-black/10 mix-blend-difference" onClick={() => {!isDisabled.current && MoveLeft()}}>〈</button>
                        <button className="relative w-12 h-12 pl-3 text-white/90 text-2xl font-medium rounded-full bg-black/10 mix-blend-difference" onClick={() => {!isDisabled.current && MoveRight()}}>〉</button>
                    </div>
                </div>
    </div>)
}