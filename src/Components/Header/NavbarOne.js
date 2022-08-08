import React, { Component } from 'react'
import {Route, Link, Routes, useLocation} from 'react-router-dom';

export class NavbarOne extends Component {
  render() {
    return (
        <div>
            <div className="offset-menu">
                <span id="offset-menu-close-btn">
                    <i className="fal fa-plus" />
                </span>
                <div className="offset-menu-wrapper text-white">
                    <div className="offset-menu-header">
                        <div className="offset-menu-logo">
                            <Link className="logo" to='#'>
                                <img src={require("../../assets/img/logo.png")} alt="busico" />
                            </Link>
                        </div>
                    </div>
                    <div className="offset-menu-section">
                        <h3>About Us</h3>
                        <p>
                            We must explain to you how all seds this mistakens idea off
                            denouncing pleasures and praising pain was born and I will give you
                            a completed
                        </p>
                        <Link className="theme-btn  mt-30" to='#'>
                            Consultation
                        </Link>
                    </div>
                    <div className="offset-menu-section">
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <span>
                                    <i className="fal fa-map" />
                                </span>
                                Rock St 12, Newyork City, USA
                            </li>
                            <li>
                                <span>
                                    <i className="fal fa-phone" />
                                </span>
                                (000) 000-000-0000
                            </li>
                            <li>
                                <span>
                                    <i className="fal fa-envelope" />
                                </span>
                                info@example.com
                            </li>
                            <li>
                                <span>
                                    <i className="fal fa-clock" />
                                </span>
                                Week Days: 09.00 to 18.00
                            </li>
                            <li>
                                <span>
                                    <i className="fal fa-clock" />
                                </span>
                                Sunday: Closed
                            </li>
                        </ul>
                    </div>
                    <div className="offset-menu-footer">
                        <div className="offset-menu-social-icon">
                            <Link to='#'>
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to='#'>
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link to='#'>
                                <i className="fab fa-linkedin-in" />
                            </Link>
                            <Link to='#'>
                                <i className="fab fa-dribbble" />
                            </Link>
                            <Link to='#'>
                                <i className="fab fa-youtube" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header-wrap header-1">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <Link to='#'>
                                <img src={require("../../assets/img/logo.png")} alt="busico" />
                            </Link>
                        </div>
                        <div className="header-right-area d-flex">
                            <div className="main-menu d-none d-xl-block">
                                <ul>
                                    <li>
                                        <Link to='#'>
                                            Home <i className="fal fa-plus" />
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to='#'>homepage 1</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>homepage 2</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>homepage 3</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>homepage 4</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='#'>Services</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>
                                            Pages <i className="fal fa-plus" />
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to='#'>about 2</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>team</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>faq</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>projects</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>projects 2</Link>
                                            </li>
                                            <li>
                                                <Link to='#'>Pricing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='#'>News</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='#' className="search-btn">
                                            <i className="fas fa-search" />
                                        </Link>
                                        <div className="search-box">
                                            <form action="#">
                                                <input type="text" placeholder="Search" />
                                                <button type="submit">
                                                    <i className="fal fa-search" />
                                                </button>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-right-elements d-flex align-items-center justify-content-between">
                                <Link to='#' className="theme-btn d-none d-sm-block">
                                    Get Free Quote
                                </Link>
                                <Link to='#' className="side-menu-toggle d-none d-xl-block">
                                    <i className="fal fa-bars" />
                                </Link>
                                <div className="d-inline-block ms-4 d-xl-none">
                                    <div className="mobile-nav-wrap">
                                        <div id="hamburger">
                                            <i className="fal fa-bars" />
                                        </div>
                                        {/* mobile menu - responsive menu  */}
                                        <div className="mobile-nav">
                                            <button type="button" className="close-nav">
                                                <i className="fal fa-times-circle" />
                                            </button>
                                            <nav className="sidebar-nav">
                                                <ul className="metismenu" id="mobile-menu">
                                                    <li>
                                                        <Link className="has-arrow" to='#'>
                                                            Homes
                                                        </Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to='#'>homepage 1</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='#'>homepage 2</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='#'>homepage 3</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='#'>homepage 4</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to='#'>Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='#'>portfolio</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="has-arrow" to='#'>
                                                            Pages
                                                        </Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to='#'>faq</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='#'>services details</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='#'>Team</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to='#'>News</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='#'>Contact</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div className="action-bar">
                                                <Link href="mailto:modinatheme@gmail.com">
                                                    <i className="fal fa-envelope" />
                                                    info@webmail.com
                                                </Link>
                                                <Link href="tel:123-456-7890">
                                                    <i className="fal fa-phone" />
                                                    987-098-098-09
                                                </Link>
                                                <Link to='#' className="d-btn theme-btn">
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

            <div className="hero-social-elements d-none d-xxl-block">
                    <div className="flp-text">
                        <p>Follow Us</p>
                    </div>
                    <div className="long-arrow" />
                    <div className="social-link">
                        <Link to='#'>
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to='#'>
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link to='#'>
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link to='#'>
                            <i className="fab fa-linkedin-in" />
                        </Link>
                    </div>
            </div>
        </div>
    )
  }
}

export default NavbarOne