"use client";
import React,{useEffect, useRef, useState} from "react";
import {Cormorant_Garamond, Vend_Sans} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600']
})



export default function ContactUs(){

    async function SendMail(name: string, email: string, description: string) {
        // try {
        //     const response = await fetch("/api/sendmail", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ name, email, description }),
        //     });

        //     const data = await response.json();
        //     console.log(data);

        //     if (data.success) {
        //     alert("Email sent successfully!");
        //     } else {
        //     alert("Failed to send email: " + data.message);
        //     }
        // } catch (err) {
        //     console.error("Client-side error:", err);
        //     alert("An error occurred while sending the email.");
        // }
        console.log("The contact us function is working");
    }

    function SubmitFunction(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const description = formData.get("description");
        console.log('Name: ',name);
        console.log('Email: ',email);
        console.log('Description: ',description);

        if(!description) return ;
        SendMail(name, email, description);
    }

    return(<div className="relative w-full py-30 h-auto flex flex-col items-center bg-black">
        <div className=""><h1 className="text-4xl text-white text-center"><span className={`text-blue-800/85 text-[42px] ${cormorant.className}`}>Contact</span> Us</h1></div>
        
        <div className="w-[90%] max-w-200 mt-20 min-h-80 h-auto rounded-2xl border border-white/10 [box-shadow:0px_0px_5px_rgba(270,270,270,0.5)] flex items-center justify-center">
            <form onSubmit={(e) => SubmitFunction(e)} className="relative w-full">
                <div className="relative w-full h-auto flex flex-col items-center gap-4">
                    <div className="relative w-80 h-fit">
                        <input type="text" className="w-80 py-2 px-3 rounded-lg border border-white/40 text-white/90 focus:outline-none focus:border-white/70 text-[16px] peer" name="name" required/>
                        <label className="absolute left-2 bg-black/90 px-1 top-2.5 pointer-events-none text-white/60 transition-all duration-300 peer-valid:-top-3 peer-valid:scale-80 peer-hover:-top-3 peer-hover:scale-80 peer-focus:-top-3 peer-focus:scale-80">Full Name</label>
                    </div>
                    <div className="relative w-80 h-fit">
                        <input type="text" className="w-80 py-2 px-3 rounded-lg border border-white/40 text-white/90 focus:outline-none focus:border-white/70 text-[16px] peer" name="email" required/>
                        <label className="absolute left-2 bg-black/90 px-1 top-2.5 pointer-events-none text-white/60 transition-all duration-300 peer-valid:-top-3 peer-valid:scale-80 peer-hover:-top-3 peer-hover:scale-80 peer-focus:-top-3 peer-focus:scale-80">Email</label>
                    </div>
                    <div className="relative w-80 h-fit flex justify-center">
                        <textarea className="styledscrollargiver h-auto min-h-35 w-full py-2 px-3 rounded-lg border border-white/40 text-white/90 focus:outline-none focus:border-white/70 text-[16px]" name="description"/>
                        <label className="absolute left-2 md:left-4 bg-black/90 px-1 -top-3 scale-80 origin-left pointer-events-none text-white/60">Description</label>  
                    </div>
                <input type="submit" className="relative rounded-full bg-white/90 px-4 font-sans font-bold hover:bg-transparent text-black hover:text-white border border-white/40" value="Send"/>
                </div>
            </form>
        </div>
    </div>)
}
