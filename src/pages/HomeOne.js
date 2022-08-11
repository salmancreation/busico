import BlogOne from "../Components/Blog/BlogOne";
import BrandCarouselOne from "../Components/Brands/BrandCarouselOne";
import CtaOne from "../Components/Cta/CtaOne";
import FooterOne from "../Components/Footer/FooterOne";
import HeaderOne from "../Components/Header/HeaderOne";
import HeroOne from "../Components/Hero/HeroOne";
import HeroSocials from "../Components/Hero/HeroSocials";
import ServicesOne from "../Components/Services/ServicesOne";
import TeamOne from "../Components/Team/TeamOne";
import TestimonialOne from "../Components/Testimonial/TestimonialOne";
import WorkProcess from "../Components/Work/WorkProcess";
const HomeOne = () => {
    return (
        <>
        <HeaderOne/>
        <HeroSocials/>
        <HeroOne/>
        <WorkProcess/>
        <ServicesOne/>
        <CtaOne/>
        <BrandCarouselOne/>
        <TestimonialOne/>
        <TeamOne/>
        <BlogOne/>
        <FooterOne/>
        </>
    )
}

export default HomeOne;