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

        {/* set its width so it does not cut edges */}
        <div className="relative mt-12 w-full max-w-330 h-full flex flex-col xl:flex-row items-center justify-center"> 

                <div className="relative w-auto h-auto flex items-center justify-center flex-col md:flex-row">
                    <div className="relative w-100 h-75 md:w-75 md:h-80 transition-all duration-400 m-4 md:mx-6 lg:mx-8 rounded-2xl bg-[url('/bgimage1.jpg')] bg-center bg-cover shadow-lg shadow-blue-200/40 before:absolute before:inset-0 before:bg-black/30 before:z-1 overflow-hidden group">
                        <div className="absolute bottom-0 overflow-hidden h-[28%] w-[98%] lg:w-[97%] [box-shadow:0px_0px_5px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:bg-black/1 group-hover:before:bg-black/10 before:transition-all before:duration-400 m-1 transition-all duration-400 ease-in backdrop-blur-sm rounded-2xl group-hover:w-full group-hover:h-full group-hover:m-0">
                        <div className="py-1"><div className="relative m-1 w-9 h-9 rounded-full [box-shadow:0px_0px_3px_rgba(270,270,270,0.4)] text-white text-2xl font-bold font-sans flex items-center justify-center before:transition-all before:-z-1 before:duration-400 before:absolute before:inset-0 before:bg-blue-600/60 overflow-hidden before:opacity-0 group-hover:before:opacity-100">1</div></div>
                        <div className=""><h1 className="text-[20px] pl-2 text-medium text-white">Graphics Designing</h1>
                        <p className="text-[14px] text-white/85 px-2 opacity-0 group-hover:opacity-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eaque libero soluta hic numquam! Tempor</p>
                        <div className="relative m-2 h-auto py-1 text-[16px] px-2 w-fit text-white mt-30 pl-2 rounded-full shadow-sm shadow-white/80 hover:bg-white">Explore More -&gt;</div>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-100 h-75 md:w-75 md:h-80 transition-all duration-400 m-4 md:mx-6 lg:mx-8 rounded-2xl bg-[url('/bgimage2.jpg')] bg-center bg-cover shadow-lg shadow-blue-200/40 before:absolute before:inset-0 before:bg-black/30 before:z-1 overflow-hidden group">
                        <div className="absolute bottom-0 overflow-hidden h-[28%] w-[98%] lg:w-[97%] [box-shadow:0px_0px_5px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:bg-black/1 group-hover:before:bg-black/10 before:transition-all before:duration-400 m-1 transition-all duration-400 ease-in backdrop-blur-sm rounded-2xl group-hover:w-full group-hover:h-full group-hover:m-0">
                        <div className="py-1"><div className="relative m-1 w-9 h-9 rounded-full [box-shadow:0px_0px_3px_rgba(270,270,270,0.4)] text-white text-2xl font-bold font-sans flex items-center justify-center before:transition-all before:-z-1 before:duration-400 before:absolute before:inset-0 before:bg-blue-600/60 overflow-hidden before:opacity-0 group-hover:before:opacity-100">2</div></div>
                        <div className=""><h1 className="text-[20px] pl-2 text-medium text-white">Web Development</h1>
                        <p className="text-[14px] text-white/85 px-2 opacity-0 group-hover:opacity-100">Lorem, ipsum dolor sit amet consectetur  elit. Labore eaque libero soluta hic ! Tempor</p>
                        <div className="relative m-2 h-auto py-1 text-[16px] px-2 w-fit text-white mt-30 pl-2 rounded-full shadow-sm shadow-white/80 hover:bg-white">Explore More -&gt;</div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-auto h-auto flex items-center justify-center flex-col md:flex-row">
                    <div className="relative w-100 h-75 md:w-75 md:h-80 transition-all duration-400 m-4 md:mx-6 lg:mx-8 rounded-2xl bg-[url('/bgimage3.jpg')] bg-center bg-cover shadow-lg shadow-blue-200/40 before:absolute before:inset-0 before:bg-black/30 before:z-1 overflow-hidden group">
                        <div className="absolute bottom-0 overflow-hidden h-[28%] w-[98%] lg:w-[97%] [box-shadow:0px_0px_5px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:bg-black/1 group-hover:before:bg-black/10 before:transition-all before:duration-400 m-1 transition-all duration-400 ease-in backdrop-blur-sm rounded-2xl group-hover:w-full group-hover:h-full group-hover:m-0">
                        <div className="py-1"><div className="relative m-1 w-9 h-9 rounded-full [box-shadow:0px_0px_3px_rgba(270,270,270,0.4)] text-white text-2xl font-bold font-sans flex items-center justify-center before:transition-all before:-z-1 before:duration-400 before:absolute before:inset-0 before:bg-blue-600/60 overflow-hidden before:opacity-0 group-hover:before:opacity-100">3</div></div>
                        <div className=""><h1 className="text-[20px] pl-2 text-medium text-white">AI & Automation</h1>
                        <p className="text-[14px] text-white/85 px-2 opacity-0 group-hover:opacity-100">Polor sit amet consectetur adipisicing elit. Labore eaque  soluta hic numquam! Tempor</p>
                        <div className="relative m-2 h-auto py-1 text-[16px] px-2 w-fit text-white mt-30 pl-2 rounded-full shadow-sm shadow-white/80 hover:bg-white">Explore More -&gt;</div>
                        </div>
                        </div>
                    </div>

                    <div className="relative w-100 h-75 md:w-75 md:h-80 transition-all duration-400 m-4 md:mx-6 lg:mx-8 rounded-2xl bg-[url('/bgimage4.jpg')] bg-center bg-cover shadow-lg shadow-blue-200/40 before:absolute before:inset-0 before:bg-black/30 before:z-1 overflow-hidden group">
                        <div className="absolute bottom-0 overflow-hidden h-[28%] w-[98%] lg:w-[97%] [box-shadow:0px_0px_5px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:bg-black/1 group-hover:before:bg-black/10 before:transition-all before:duration-400 m-1 transition-all duration-400 ease-in backdrop-blur-sm rounded-2xl group-hover:w-full group-hover:h-full group-hover:m-0">
                        <div className="py-1"><div className="relative m-1 w-9 h-9 rounded-full [box-shadow:0px_0px_3px_rgba(270,270,270,0.4)] text-white text-2xl font-bold font-sans flex items-center justify-center before:transition-all before:-z-1 before:duration-400 before:absolute before:inset-0 before:bg-blue-600/60 overflow-hidden before:opacity-0 group-hover:before:opacity-100">4</div></div>
                        <div className=""><h1 className="text-[20px] pl-2 text-medium text-white">Ad Development</h1>
                        <p className="text-[14px] text-white/85 px-2 opacity-0 group-hover:opacity-100">Lorem, ipsum dolor sit amet  adipisicing elit. Labore  libero soluta hic numquam! s</p>
                        <div className="relative m-2 h-auto py-1 text-[16px] px-2 w-fit text-white mt-30 pl-2 rounded-full shadow-sm shadow-white/80 hover:bg-white">Explore More -&gt;</div>
                        </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>)
}
