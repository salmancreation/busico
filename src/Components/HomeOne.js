import React, { Component } from 'react'
import HeroOne from './Hero/HeroOne'
import HeaderOne from './Header/HeaderOne';
// import FeaturesOne from './Features/FeaturesOne'
// import AboutOne from './About/AboutOne'
// import ServiceOne from './Service/ServiceOne'
// import TeamOne from './Team/TeamOne'
// import Appointment from './Appointment'
// import GalleryOne from './Gallery/GalleryOne'
// import TestimonailOne from './Testimonial/TestimonailOne'
// import BlogOne from './Blog/BlogOne'
// import Promo from './Promo'
// import ClientLogos from './ClientLogos'
// import BlogData from './Data/BlogData';
// import ServiceData from './Data/ServiceData';
// import FeaturesData from './Data/FeaturesData';
// import TeamData from './Data/TeamData'

class HomeOne extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderOne/>
                <HeroOne/>
            </React.Fragment>
        )
    }
}

export default HomeOne
