"use client";
import React,{useEffect, useRef, useState} from "react";
import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})


export default function ClientReviews(){
    const userscontainer = useRef<HTMLDivElement | null>(null);
    const isshown = useRef(false);
    const isDisabled = useRef(false);
    const [visibleIndex, setvisibleIndex] = useState(-1);

    function AnimationCall(){
         console.log("it clicked");
        if(!userscontainer.current || isDisabled.current) return;
        const users = Array.from(userscontainer.current.children) as HTMLElement[];
        if(!isshown.current){
            users.forEach((element, index) => setTimeout(() => {element.classList.add("user"+(index+1))},index*20));
            isshown.current = true;
        }
        else if(isshown.current){
            users.forEach((element, index) => element.classList.remove("user"+(index+1)));
            isshown.current = false;

            // const MysetTimeout = setTimeout(() => AnimationCall(),8000);    // do something about this part as well
        }
        isDisabled.current = true;
        setTimeout(() => {isDisabled.current = false},600)
    }

    useEffect(() => {
        const container = userscontainer.current;
        if(!container)  return ;

        const users = Array.from(container.children) as HTMLElement[];

        const observer = new IntersectionObserver(([element]) => {
            if(element.isIntersecting){ 
                console.log("in view");
                setTimeout(() => {
                    users.forEach((element, index) => {element.classList.add("user"+(index+1))});
                    isshown.current = true;
                },500);
            }
            else{
                console.log("out of view");
            }
        });
        observer.observe(container);

        return () => (container) && observer.unobserve(container);
    },[])

    function ApplyZIndex(e:HTMLDivElement){
        e.style.zIndex = "4";
        setTimeout(() => {e.style.zIndex = "3"},800)
    }

    useEffect(() => {console.log("Visible Index:",visibleIndex); if(visibleIndex != -1) setTimeout(() => {setvisibleIndex(-1)},800)},[visibleIndex])

    return(<div className="relative w-full pt-30 pb-20 h-auto flex flex-col justify-center items-center bg-black/98">
        <div className="relative w-full max-w-220 mx-2 md:mx:6 flex flex-col justify-center items-center">
            <h1 className="text-white/90 text-4xl lg:text-5xl"><span className={`${cormorant.className} text-[40px] lg:text-[52px] text-blue-700/90`}><span className="text-[43px] lg:text-[56px]">C</span>lient </span>Reviews</h1>
            <p className="text-white/65 mt-4 text-center text-[12px] px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda dicta, nihil magnam eaque cumque vitae eius tempora sunt maxime minima eos aut rerum eligendi ipsam e adipisci autem, necessitatibus nemo explicabo, quos eaque voluptatibus, minima odit cum corrupti quasi rerum repellat quis optio eligendi.</p>
        </div>

        <div className="relative w-[90%] mt-30 mx-auto pb-30 h-full min-h-100 flex justify-center items-center">   
        {/* Center Msg */}
        <div className="relative w-25 h-25 rounded-full flex justify-center items-center z-2 " onClick={() => AnimationCall()}>
            <div className="relative w-20 h-20 flex justify-center items-center bg-black rounded-full before:absolute before:inset-0 before:rounded-full before:bg-black/75">
                <div className="relative w-12 mr-1.5 mt-1.5 h-10 scale-80 lg:scale-90 pointer-events-none">
                    <div className="absolute left-1 top-1 h-[80%] w-[80%] bg-white rounded-2xl z-2 pointer-events-none"></div>
                    <div className="absolute -top-px -right-px w-[95%] h-[90%] rounded-[13px] bg-black z-1 pointer-events-none" />
                    <div className="relative w-12 h-12 mask-[url('/message3.png')] bg-blue-600 mask-cover z-3 pointer-events-none" />
                    <div className="absolute -top-2 -right-1.5 w-full h-[90%] bg-white/85 rounded-xl pointer-events-none" />
                </div>
            </div>
            <div className="absolute w-20 h-20 rounded-full shadow-[0px_6px_22px_rgba(37,99,235,0.6)]" />
        </div>

        {/* Users */}
        <div className="userscontainer absolute w-12 h-12" ref={userscontainer}>
            <div className={` absolute hidden md:block top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user2.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(0); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 0? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute hidden md:block top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user3.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(1); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 1? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user4.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(2); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 2? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user5.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(3); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 3? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user6.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(4); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 4? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user7.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(5); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 5? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user8.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(6); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 6? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user5.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(7); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 7? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user6.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(8); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 8? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute hidden md:block top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user7.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(9); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 9? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute hidden md:block top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user7.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(10); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 10? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute hidden md:block top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user8.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(11); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 11? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute hidden md:block top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user5.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(12); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 12? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>

            <div className={` absolute top-0 left-0 transition-all duration-1000 ease-out w-12 h-12 md:w-14 md:h-14 rounded-full z-1 bg-[url('/users/user6.PNG')] bg-cover bg-center group shadow-md shadow-white/20`} onClick={(e) => {setvisibleIndex(13); ApplyZIndex(e.currentTarget as HTMLDivElement)}}>
                <div className={` absolute bottom-full left-6 w-62 h-auto rounded-lg border border-white/30 backdrop-blur-[2px] bg-white/10 group-hover:block ${visibleIndex == 13? "block":"hidden"} `}>
                <h1 className="text-[12px] font-bold text-white p-2">Mark Zuckerberg</h1>
                <p className="text-[10px] leading-2.5 px-2 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cupiditate aperiam voluptatum laudantium iste veritatis ipsa natus</p>
                </div>
            </div>
        </div>

        </div>

    </div>)
}

