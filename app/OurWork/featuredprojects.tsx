"use client"
import React,{useRef, useState} from "react";


export default function FeaturedProjects(){
    const translateposition = useState('translate-x-[0px]');

    const Entries = [
        "ourwork/featuredproject1.jpeg",
        "ourwork/featuredproject2.jpeg",
        "ourwork/featuredproject3.jpeg",
        "ourwork/featuredproject4.jpeg",
        "ourwork/featuredproject1.jpeg",
        "ourwork/featuredproject2.jpeg",
        "ourwork/featuredproject3.jpeg",
        "ourwork/featuredproject4.jpeg",
        "ourwork/featuredproject1.jpeg",
        "ourwork/featuredproject2.jpeg",
        "ourwork/featuredproject3.jpeg",
        "ourwork/featuredproject4.jpeg",
        "ourwork/featuredproject1.jpeg",
        "ourwork/featuredproject2.jpeg",
        "ourwork/featuredproject3.jpeg",
        "ourwork/featuredproject4.jpeg",
    ]

    return(<div className="relative my-8 w-[95%] md:w-[90%] max-w-7xl bg-pink-200/10 h-100 md:h-110 lg:h-120 overflow-hidden">
                <div className={`relative h-full w-auto flex flex-row transition-all duration-700  ${translateposition}`}>
                    {Entries.map((element, index) => (
                        <div
                        key={index}
                        className="flex-none relative w-65 md:w-70 lg:w-75 h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${element})` }}
                        ></div>
                    ))}
                </div>

                <div className="absolute z-2 h-full w-full flex flex-row justify-between items-center"></div>

        </div>)
}