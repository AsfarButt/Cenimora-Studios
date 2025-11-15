import Header from "./header";
import HeroSection from "./herosection";
import SelectedWork from "./selectedwork";
import OurServices from "./ourservices";




export default function Page(){


    return(<div className="relative w-screen mb-500 h-auto">
        <Header />
        <HeroSection />
        <SelectedWork />
        <OurServices />
    </div>)
}