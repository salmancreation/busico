import HeaderFour from "../Components/Header/HeaderFour";
import HeroFour from "../Components/Hero/HeroFour";
import FooterFour from "../Components/Footer/FooterFour";
import AboutFour from "../Components/About/AboutFour";
import ServicesFour from "../Components/Services/ServicesFour";
import BlogFour from "../Components/Blog/BlogFour";

const HomeFour = () => {
    return (
        <div className="font-oswald">
            <HeaderFour/>
            <HeroFour/>
            <AboutFour/>
            <ServicesFour/>
            <BlogFour/>
            <FooterFour/>
        </div>
    )
}

export default HomeFour;