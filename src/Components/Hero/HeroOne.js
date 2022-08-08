import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class HeroOne extends Component {
  render() {
    return (
      <div>
        <section className="hero-wrapper hero-1">
            <div className="hero-slider-active owl-carousel">
                <div className="single-slide bg-cover" style={{backgroundImage: 'url{require("../../assets/img/home1/slide1.jpg")}'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                        <div className="hero-contents pe-lg-3">
                        <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                        <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">Busico is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                        <Link to='#' className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</Link>
                        <Link href="about.html" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                            <div className="icon">
                            <i className="fas fa-plus" />
                            </div>
                            <div className="link-text">
                            <span>Explore</span> More about Us
                            </div>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="single-slide bg-cover" style={{backgroundImage: 'url({require("../../assets/img/home1/slide1.jpg"))'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                        <div className="hero-contents pe-lg-3">
                        <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                        <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">Busico is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                        <Link to='#' className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</Link>
                        <Link href="about.html" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                            <div className="icon">
                            <i className="fas fa-plus" />
                            </div>
                            <div className="link-text">
                            <span>Explore</span> More about Us
                            </div>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="slider-nav" />
            </section>

      </div>
    )
  }
}

export default HeroOne