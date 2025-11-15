import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})


export default function OutServices(){

    return(<div className="relative w-full pt-30 pb-100 h-auto flex flex-col justify-center items-center bg-black/98">
        <div className="relative w-full max-w-220 mx-2 md:mx:6 flex flex-col justify-center items-center">
            <h1 className="text-white/90 text-4xl lg:text-5xl"><span className={`${cormorant.className} text-[40px] lg:text-[52px] text-blue-700/90`}><span className="text-[43px] lg:text-[56px]">C</span>lient </span>Reviews</h1>
            <p className="text-white/65 mt-4 text-center text-[12px] px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda dicta, nihil magnam eaque cumque vitae eius tempora sunt maxime minima eos aut rerum eligendi ipsam e adipisci autem, necessitatibus nemo explicabo, quos eaque voluptatibus, minima odit cum corrupti quasi rerum repellat quis optio eligendi.</p>
        </div>

        <div className="relative w-full h-full bg-white/20 flex justify-center items-center">   
            <div className="relative top-32 w-20 h-20 flex justify-center items-center bg-white/20 rounded-full shadow-lg shadow-blue-500/30">
                <div className="relative w-12 mr-1.5 mt-1.5 h-10 scale-80 ">
                    <div className="absolute left-1 top-1 h-[80%] w-[80%] bg-white rounded-2xl z-2"></div>
                    <div className="absolute -top-px -right-px w-[95%] h-[90%] rounded-[13px] bg-black z-1" />
                    <div className="relative w-12 h-12 mask-[url('/message3.png')] bg-blue-600 mask-cover z-3" />
                    <div className="absolute -top-2 -right-1.5 w-full h-[90%] bg-white/85 rounded-xl" />
                </div>
            </div>
        </div>

    </div>)
}

