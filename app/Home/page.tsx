import Header from "./header";
import HeroSection from "./herosection";
import SelectedWork from "./selectedwork";
import ClientReviews from "./clientreviews";
import Testimonials from "./testimonials";
import Ratings from "./ratings";
import ManagementStrategy from "./managementstrategy";
import ContactUs from "./contactus";




export default function Page(){


    return(<div className="relative w-screen mb-500 h-auto">
        
        <Header />
        <HeroSection />
        <SelectedWork />
        <ClientReviews />
        <Testimonials />
        <Ratings />
        <ManagementStrategy />
        <ContactUs />

    </div>)
}