import {Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400']
})




export default function Header(){




    return(<div className="absolute mr-2 top-8 w-[98%] h-auto flex items-center justify-center z-2">
        <div className="relative w-full p-1 mx-2 max-w-260 h-full bg-white/20 backdrop-blue-sm rounded-full flex items-center justify-between">
        <div className="relative w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-t from-blue-600/80 to-blue-800/85">
            <div className="relative w-8 h-8 mask-[url('/sparkler.png')] mask-cover bg-yellow-50" />
            <div className="absolute rotate-45 w-8 h-8 mask-[url('/sparkler.png')] mask-cover bg-white" />
        </div>
        <ul className={`relative w-[60%] text-[12px] sm:text-[14px] h-full list-disc marker:text-blue-500/80 pointer-events-auto ${poppins.className} flex flex-row items-center justify-between`}>
            <li className="list-none w-fit h-full hover:list-disc text-white/80 cursor-default"><a className="" href="/Home">Home</a></li>
            <li className="list-none w-fit h-full hover:list-disc text-white/80 cursor-default"><a className="" href="/About">About us</a></li>
            <li className="list-none w-fit h-full hover:list-disc text-white/80 cursor-default"><a className="" href="/Services">Services</a></li>
            <li className="list-none w-fit h-full hover:list-disc text-white/80 cursor-default"><a className="" href="/OurWork">Our Work</a></li>
            {/* <li className="list-none w-fit h-full hover:list-disc text-white/80 cursor-default">Testimonial</li> */}
        </ul>
        <a className="relative w-[20%] max-w-40 h-9 sm:h-10 rounded-full flex justify-center items-center radialgradient group" href="/ContactUs"><h1 className={`text-black font-sans text-[12px] sm:text-[16px] group-hover:text-white/90`}>Contact Us</h1></a>
        </div>
    </div>)
}