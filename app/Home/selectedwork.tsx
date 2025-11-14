import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})


export default function SelectedWork(){

    return(<div className="relative w-full h-auto flex flex-col justify-center items-center bg-black/98">
        <div className="relative w-full max-w-220 mx-2 md:mx:6 flex flex-col justify-center items-center">
            <h1 className="text-white/90 text-4xl lg:text-5xl">Selected <span className={`${cormorant.className} text-[40px] lg:text-[52px] text-blue-700/90`}>Work</span></h1>
            <p className="text-white/65 mt-4 text-center text-[12px] px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda dicta, nihil magnam eaque cumque vitae eius tempora sunt maxime minima eos aut rerum eligendi ipsam e adipisci autem, necessitatibus nemo explicabo, quos eaque voluptatibus, minima odit cum corrupti quasi rerum repellat quis optio eligendi.</p>
        </div>

        <div className="relative mt-12 w-full max-w-330 h-full flex flex-col justify-center items-center bg-white/20">

            <div className="relative px-2 w-full h-auto mt-8 flex flex-col items-center justify-center sm:flex-col md:flex-col lg:flex-row bg-red-100/20 animation-style-preserver-3d">
                <div className="relative w-full lg:w-[50%] h-full  flex flex-row justify-evenly items-center bg-white/20">
                    <div className="relative w-60 h-75 rounded-2xl bg-blue-800/20 shadow-lg shadow-blue-200/40"></div>
                    <div className="relative w-60 h-75 rounded-2xl bg-blue-800/20 shadow-lg shadow-blue-200/40"></div>
                </div>
                <div className="relative w-[80%] lg:w-[50%] h-full bg-white/20">
                    <h1 className="text-[18px] mt-10 font-medium text-white/85 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, alias repellendus excepturi amet molestiae officia ab adipisci sequi obcaecati! Minus quasi beatae illum tempore voluptates quisquam reprehenderit voluptas fugiat et!
                    </h1>
                </div>
            </div>

            <div className="relative px-2 w-full h-auto mt-8 flex flex-col items-center justify-center sm:flex-col md:flex-col lg:flex-row bg-red-100/20">
                <div className="relative hidden lg:block w-[80%] lg:w-[50%] h-full ">
                    <h1 className="text-[18px] mt-10 font-medium text-white/85 text-center bg-white/20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, alias repellendus excepturi amet molestiae officia ab adipisci sequi obcaecati! Minus quasi beatae illum tempore voluptates quisquam reprehenderit voluptas fugiat et!
                    </h1>
                </div>
                <div className="relative w-full lg:w-[50%] h-full  flex flex-row justify-evenly items-center bg-white/20">
                    <div className="relative w-60 h-75 rounded-2xl bg-blue-800/20 shadow-lg shadow-blue-200/40"></div>
                    <div className="relative w-60 h-75 rounded-2xl bg-blue-800/20 shadow-lg shadow-blue-200/40"></div>
                </div>
            </div>

        </div>
    </div>)
}