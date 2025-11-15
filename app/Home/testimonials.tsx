import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})




export default function Testimonials(){

    return(<div className="relative pt-20 w-full h-auto min-h-100 bg-black/98 flex flex-col justify-center">
                <h1 className="text-white/90 text-4xl lg:text-5xl text-center">What people say <span className={`${cormorant.className} text-[46px] lg:text-[58px] text-blue-700/90`}>about us</span></h1>

                <div className="relative mx-auto max-w-290 w-[90%] h-200">
                    <div className="relative w-full h-full mask-[linear-gradient(to_bottom,transparent_0%_2%,white_10%_90%,transparent_98%_100%)] bg-white/70">
                        {/* Testimonials Columns */}
                    </div>
                </div>
    </div>)
}