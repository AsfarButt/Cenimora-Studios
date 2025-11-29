





export default function Page(){

    return(<div className="relative w-full h-auto min-h-200 flex flex-col items-center justify-center bg-black">
            <div className="relative w-full px-2 sm:px-6 md:px-14 lg:px-32 h-auto flex flex-row items-center justify-center">
                <div className="relative w-full md:w-[50%] h-auto text-white/90 text-center md:text-left">
                    <h1 className="text-[28px] md:text-[32px] font-sans font-semibold">See our work</h1>
                    <h2 className="text-[16px] md:text-[18px] mt-4 md:mt-0 text-white/80 md:max-w-80">Browse the campaigns, edits, and brand stories we've created for our clients.</h2>
                </div>
                <div className="relative md:w-[50%] h-auto hidden md:flex flex-row items-center justify-center">
                    <video className="w-60 h-100 rounded-lg shadow-2xl shadow-white/20" autoPlay muted loop>
                    <source src="/ourwork/video2.mp4" type="video/mp4" />
                    </video>
                    <video className="w-70 h-120 rounded-lg shadow-2xl shadow-white/20" autoPlay muted loop>
                    <source src="/ourwork/video3.mp4" type="video/mp4" />
                    </video>
                    <video className="w-60 h-100 rounded-lg shadow-2xl shadow-white/20" autoPlay muted loop>
                    <source src="/ourwork/video2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
    </div>)
}