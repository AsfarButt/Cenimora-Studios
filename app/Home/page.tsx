// import Header from "../header";
import HeroSection from "./herosection";
import SelectedWork from "./selectedwork";
import ClientReviews from "./clientreviews";
import Testimonials from "./testimonials";
import Ratings from "./ratings";
import ManagementStrategy from "./managementstrategy";
import ContactUs from "./contactus";
import Footer from "../footer";




export default function Page(){


    return(<div className="relative w-screen h-auto">
        
        {/* <Header /> */}
        <HeroSection />
        <SelectedWork />
        <ClientReviews />
        <Testimonials />
        <Ratings />
        <ManagementStrategy />
        <ContactUs />

    </div>)
}