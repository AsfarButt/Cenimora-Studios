import {Oswald} from "next/font/google";

const orwald = Oswald({
    subsets: ['latin'],
    weight: ['400']
})



export default function Footer(){

    return(<div className="relative w-full py-8 h-auto [box-shadow:0px_-1px_3px_rgba(270,270,270,0.7)]
        bg-black/99 overflow-hidden
      flex flex-col justify-center items-center">
            <h1 className={`${orwald.className} text-white w-full text-center scale-y-120 text-[28px] md:text-[30px] lg:text-[34px]`}><a href="/Home">CENIMORA STUDIOS</a></h1>
            <div className="relative w-[98%] max-w-280 pt-8 h-auto flex flex-row justify-between">
                <a className="relative w-full h-auto cursor-pointer hover:[text-shadow:0_0_3px_white] text-white/98" href="/Home">
                Home
                </a>
                <li className="relative w-full list-none h-auto cursor-pointer hover:[text-shadow:0_0_3px_white] text-white/98">
                <a  className="block" href="/OurWork">Our Work</a>
                <a className="block text-[14px] text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline">Most Viral</a>
                <a className="block text-[14px] text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline">Featured</a>
                <a className="block text-[14px] text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline">Categorized</a>
                <a className="block text-[14px] text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline">Our Exclusive</a>
                </li>
                <a className="relative w-full h-auto cursor-pointer hover:[text-shadow:0_0_3px_white] text-center text-white/98" href="/About">
                About Us
                </a>
                <li className="relative list-none w-full h-auto cursor-pointer hover:[text-shadow:0_0_3px_white] max-w-30 sm:max-w-45 md:max-w-60 text-white/98 text-right">
                <a className="block" href="/ContactUs">Contact Us</a>
                <a className="block text-[14px] w-full h-fit text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline" href="https://wa.me/+92973387525" target="_blank">+92 973 387525</a>
                <a className="block text-[14px] w-full h-fit text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline" href="https://wa.me/05158928742" target="_blank">051 589 28742</a>
                {/* <li className="text-[14px] w-full h-fit text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline list-none flex flex-wrap hover:list-disc"><span>iqrarworksat</span><span>cinemora@gmail.com</span></li> */}
                <a className="text-[14px] w-full h-fit text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline flex flex-wrap hover:list-disc"><span className="w-full">support@cinemora</span><span className="w-full">studios.com</span></a>
                <a className="text-[14px] w-full h-fit text-gray-200/85 text-shadow-[0_0_2px_black] hover:underline flex flex-wrap hover:list-disc"><span className="w-full">info@cinemora</span><span className="w-full">studios.com</span></a>
                </li>
            </div>

            <div className="relative w-full h-auto flex flex-col justify-center items-center">
                <div className="relative w-[90%] py-8 max-w-7xl border-b border-white/80 flex flex-row items-center justify-center">
                    <span className="text-[14px] w-[50%] max-w-35 text-white/85 hover:text-gray-200/65 text-right">Our Policy</span>
                    <div className="relative w-0.5 mx-2 sm:mx-4 md:mx-8 lg:mx-12 h-5 bg-white"></div>
                    <span className="text-[14px] w-[50%] max-w-35 text-white/85 hover:text-gray-200/65 text-left">Terms and Services</span>
                </div>
                <h1 className="w-full text-center mt-2 md:mt-4 text-[10px] md:text-[12px] text-white/85">@cinemorastudios | All rights reserved</h1>
            </div> 
    </div>)
    //  before:absolute before:inset-0 before:bg-white/10 before:-z-1 bg-linear-to-br from-black via-black/97 to-black

}
