import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})


export default function ManagementStrategy(){


    return(<div className="relative w-full py-20 h-auto bg-black/98 flex flex-col items-center">
        <h1 className="text-white/90 text-4xl lg:text-5xl text-center">A Fully Managed <span className={`${cormorant.className} text-[46px] lg:text-[58px] text-blue-700/90`}>Retention Growth </span>System</h1>
        <p className="w-[90%] max-w-220 mt-12 text-[20px] font-sans text-white text-center">We dont send emails - we build retention engines. The 4x4 Retention Matrix™ is a plug-and-play system that turns new buyers into loyal repeat customers through automated flows, campaigns, segmentation, and data-driven triggers. More repeat orders, less revenue left on the table.</p>

        <div className="relative mt-20 w-[95%] h-auto max-w-300 flex flex-col">
            <div className="relative w-full flex flex-col md:flex-row">
                <div className="relative w-full h-auto my-4 md:mx-4 border border-white/60 p-4 md:p-6 transition-all duration-600 hover:-translate-y-2 rounded-xl hover:[box-shadow:0px_0px_10px_rgba(270,270,270,0.4)]">
                    <div className="w-26 h-26 bg-blue-800/95 mask-[url(/strategy/step1.png)] mask-cover mask-center" />
                    <h1 className="text-[22px] font-medium text-white/90">Strategic Retention Architecture</h1>
                    <p className="text-[17px] font-sans text-white/65">We map your entire customer journey, layering in email, SMS, loyalty, direct mail, and trigger-based automation to build a system, not a campaign.</p>
                </div>
                <div className="relative w-full h-auto my-4 md:mx-4 border border-white/60 px-4 py-2 transition-all duration-600 hover:-translate-y-2 rounded-xl hover:[box-shadow:0px_0px_10px_rgba(270,270,270,0.4)]">
                    <div className="w-26 h-26 bg-blue-800/95 mask-[url(/strategy/step2.png)] mask-cover mask-center" />
                    <h1 className="text-[22px] font-medium text-white/90">LTV Optimization</h1>
                    <p className="text-[17px] font-sans text-white/65">From first to fourth order: cohort modeling, product sequencing, and offer design built to maximize repeat purchase economics.</p>
                </div>
            </div>
            <div className="relative w-full flex flex-col md:flex-row">
                <div className="relative w-full h-auto my-4 md:mx-4 border border-white/60 px-4 py-2 transition-all duration-600 hover:-translate-y-2 rounded-xl hover:[box-shadow:0px_0px_10px_rgba(270,270,270,0.4)]">
                    <div className="w-26 h-26 bg-blue-800/95 mask-[url(/strategy/step3.png)] mask-cover mask-center" />
                    <h1 className="text-[22px] font-medium text-white/90">Zero-Party Intelligence</h1>
                    <p className="text-[17px] font-sans text-white/65">Behavioral signals, quizzes, and on-site data feed segmentation and message precision, reducing friction, boosting personalization at scale.</p>
                </div>
                <div className="relative w-full h-auto my-4 md:mx-4 border border-white/60 px-4 py-2 transition-all duration-600 hover:-translate-y-2 rounded-xl hover:[box-shadow:0px_0px_10px_rgba(270,270,270,0.4)]">
                    <div className="w-26 h-26 bg-blue-800/95 mask-[url(/strategy/step4.png)] mask-cover mask-center" />
                    <h1 className="text-[22px] font-medium text-white/90">Full-Service Execution</h1>
                    <p className="text-[17px] font-sans text-white/65">Strategy, implementation, copy, creative, testing, reporting, optimization, all delivered in-house by a dedicated retention team. You scale. We handle the rest.</p>
                </div>  
            </div>
        </div>
    </div>)
}