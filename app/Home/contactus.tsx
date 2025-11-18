import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})



export default function ContactUs(){



    return(<div className="relative w-full py-30 h-auto flex flex-col items-center bg-black">
        <div className=""><h1 className="text-4xl text-white text-center"><span className={`text-blue-800/85 text-[42px] ${cormorant.className}`}>Contact</span> Us</h1></div>
        
        <div className="w-[90%] max-w-200 mt-20 min-h-80 h-auto rounded-2xl border border-white/10 [box-shadow:0px_0px_5px_rgba(270,270,270,0.5)] flex items-center justify-center">
            <div className="relative w-auto h-auto flex flex-col gap-4">
                <div className="relative w-auto h-auto">
                    <input type="text" className="w-80 py-2 px-3 rounded-lg border border-white/40 peer" placeholder=" "/>
                    <label className="absolute left-2 bg-black/90 px-1 top-3 pointer-events-none text-white/60 peer-placeholder-shown:not-[]:-top-2 peer-placeholder-shown:not-[]:scale-80 peer-active:-top-3 peer-active:scale-80">Full Name</label>
                </div>
                <div className="relative w-auto h-auto">
                    <input type="text" className="w-80 py-2 px-3 rounded-lg border border-white/40 peer" placeholder=" "/>
                    <label className="absolute left-2 bg-black/90 px-1 top-3 pointer-events-none text-white/60 peer-placeholder-shown:not-[]:-top-2 peer-placeholder-shown:not-[]:scale-80 peer-active:-top-3 peer-active:scale-80">Email</label>
                </div>
                <div className="relative w-auto h-auto">
                    <input type="text" className="w-80 py-2 px-3 rounded-lg border border-white/40 peer" placeholder=" "/>
                    <label className="absolute left-2 bg-black/90 px-1 top-3 pointer-events-none text-white/60 peer-placeholder-shown:not-[]:-top-2 peer-placeholder-shown:not-[]:scale-80 peer-active:-top-3 peer-active:scale-80">Description</label>  
                </div>
            </div>
        </div>
    </div>)
}