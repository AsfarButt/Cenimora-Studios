import Header from "./header";
import HeroSection from "./herosection";
import SelectedWork from "./selectedwork";
import ClientReviews from "./clientreviews";




export default function Page(){


    return(<div className="relative w-screen mb-500 h-auto">
        <Header />
        <HeroSection />
        <SelectedWork />
        <ClientReviews />
    </div>)
}