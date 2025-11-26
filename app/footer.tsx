import {Oswald} from "next/font/google";

const orwald = Oswald({
    subsets: ['latin'],
    weight: ['400']
})



export default function Footer(){

    return(<div className="relative w-full py-8 h-auto [box-shadow:0px_-1px_3px_rgba(270,270,270,0.7)]
        bg-black/99 overflow-hidden
      flex flex-col justify-center items-center">
            <h1 className={`${orwald.className} text-white w-full text-center scale-y-120 text-[28px] md:text-[30px] lg:text-[34px]`}>CENIMORA STUDIOS</h1>
            <div className="relative w-full pt-8 h-auto flex flex-row justify-evenly">
                <a className="relative w-auto h-auto cursor-pointer hover:text-neutral-500 text-white/98">
                Home
                </a>
                <a className="relative w-auto h-auto cursor-pointer hover:text-neutral-500 text-white/98">
                Our Work
                <li className="text-[14px] text-gray-200/85 list-none hover:list-disc">Most Viral</li>
                <li className="text-[14px] text-gray-200/85 list-none hover:list-disc">Featured</li>
                <li className="text-[14px] text-gray-200/85 list-none hover:list-disc">Categorized</li>
                <li className="text-[14px] text-gray-200/85 list-none hover:list-disc">Our Exclusive</li>
                </a>
                <a className="relative w-auto h-auto cursor-pointer hover:text-neutral-500 text-white/98">
                About Us
                </a>
                <a className="relative w-auto h-auto cursor-pointer hover:text-neutral-500 max-w-30 sm:max-w-45 md:max-w-60 text-white/98">
                Contact Us
                <li className="text-[14px] w-full h-fit text-gray-200/85 list-none hover:list-disc">+92 973 387525</li>
                <li className="text-[14px] w-full h-fit text-gray-200/85 list-none hover:list-disc">051 589 28742</li>
                {/* <li className="text-[14px] w-full h-fit text-gray-200/85 list-none flex flex-wrap hover:list-disc"><span>iqrarworksat</span><span>cinemora@gmail.com</span></li> */}
                <li className="text-[14px] w-full h-fit text-gray-200/85 list-none flex flex-wrap hover:list-disc"><span>support@cinemora</span><span>studios.com</span></li>
                <li className="text-[14px] w-full h-fit text-gray-200/85 list-none flex flex-wrap hover:list-disc"><span>info@cinemora</span><span>studios.com</span></li>
                </a>
            </div>

            <div className="relative w-full h-auto flex flex-col justify-center items-center">
                <div className="relative w-[90%] py-8 max-w-7xl border-b border-white/80 flex flex-row items-center justify-center">
                    <span className="text-[14px] w-[50%] max-w-35 text-white/85 hover:text-gray-200/65 text-right ">Our Policy</span>
                    <div className="relative w-0.5 mx-2 sm:mx-4 md:mx-8 lg:mx-12 h-5 bg-white"></div>
                    <span className="text-[14px] w-[50%] max-w-35 text-white/85 hover:text-gray-200/65 text-left ">Terms and Services</span>
                </div>
                <h1 className="w-full text-center mt-2 md:mt-4 text-[10px] md:text-[12px] text-white/85">@cinemorastudios | All rights reserved</h1>
            </div>
    </div>)
    //  before:absolute before:inset-0 before:bg-white/10 before:-z-1 bg-linear-to-br from-black via-black/97 to-black

}
