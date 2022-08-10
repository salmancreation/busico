import { Link } from "react-router-dom";
import FooterOneCopyrights from "./FooterOneCopyrights";
import footerLogo from '../../assets/img/footer-logo.png';
import { useState } from "react";

const FooterOne = () => {
    const [input, setInput] = useState('');
    return (
        <>
            <footer className="footer-1 footer-wrap">
                <div className="footer-widgets-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 pe-xl-0 col-sm-6 col-12">
                                <div className="single-footer-wid site_info_widget">
                                    <div className="wid-title">
                                        <h3>Get In Touch</h3>
                                    </div>
                                    <div className="contact-us">
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fal fa-phone"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>+673 853 605 985</p>
                                                <p>908 9098 987 98</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>info@example.com</p>
                                                <p>info@webexample.com</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fal fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>7300-7398 Colonial Rd, Brooklyn, <br/>
                                                    NY 11209</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/about">About Company</Link></li>
                                        <li><Link to="/services">Communication Services</Link></li>
                                        <li><Link to="/services">Internet of Things</Link></li>
                                        <li><Link to="/services">Product Development</Link></li>
                                        <li><Link to="/services">Industrial Automation</Link></li>
                                        <li><Link to="/contact">Payment Getway</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">                        
                                <div className="single-footer-wid newsletter_widget">
                                    <div className="wid-title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="newsletter_box">
                                        <form action="#">
                                            <i className="fal fa-envelope"></i>
                                            <input value={input} onChange={(e) => e.target.value} type="email" placeholder="Enter email address" required/>
                                            <button onClick={(e) => e.preventDefault()} className="submit-btn" type="submit">Subscribe Now <i className="fas fa-paper-plane"></i></button>
                                        </form>
                                        <p>Opening Hours : <b> Mon - Fri:  9:30 AM - 10 PM</b></p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="footer-cta-wrapper">
                    <div className="container">
                        <div className="footer-cta-bg-wrapper">
                            <div className="row justify-content-around align-items-center">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src={footerLogo} alt="logo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5 ps-lg-0 offset-lg-1 col-12">
                                    <div className="footer-middle-text mt-4 mb-4 mt-md-0 mb-md-0 text-white">
                                        <p>Become an innovative entrepreneurial &#38; empowered company constantly creating mission to be a world className construction company.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-12">
                                    <div className="footer-social-icon ms-md-5 text-lg-md-end">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <FooterOneCopyrights/>
                </div>
            </footer> 
        </>
    )
}

export default FooterOne;