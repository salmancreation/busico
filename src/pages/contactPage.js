import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import BrandCarouselThree from "../Components/Brands/BrandCarouselThree";
import contactContents from "../Components/Contact/contactContents";

const contactPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='Contact Us' bannerBg={bannerBg} currentPage='contact' />
        <contactContents/>
        <BrandCarouselThree/>
        <FooterTwo/>
    </>
  )
}

export default contactPage