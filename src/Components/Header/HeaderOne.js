import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from '../../assets/img/logo.png';
import OffsetMenu from "./OffsetMenu";

const HeaderOne = () => {
  const [search, setSearch] = useState(true);
  const [offset, setOffset] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleSearch = () => {
    setSearch(!search);
  }

  const handleOffset = () => {
    setOffset(!offset);
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
    <OffsetMenu offset={offset} handleOffset={handleOffset}  />
    <header className="header-wrap header-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to='/homeOne'>
                    <img src={mainLogo} alt="logo"/>
                </Link>
            </div>
            <div className="header-right-area d-flex">
                <div className="main-menu d-none d-xl-block">
                    <ul>
                        <li><a href="index.html">Home <i className="fal fa-plus"></i></a>
                            <ul className="sub-menu">
                                <li><Link to="/">homepage 1</Link></li>
                                <li><Link to="/homeTwo">homepage 2</Link></li>
                                <li><Link to="/homeThree">homepage 3</Link></li>
                                <li><Link to="/homeFour">homepage 4</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">portfolio</Link></li>
                        <li><a href="#">Pages <i className="fal fa-plus"></i></a>
                            <ul className="sub-menu">
                                <li><Link to="/aboutTwo">about 2</Link></li>
                                <li><Link to="/Team">team</Link></li>
                                <li><Link to="/faq">faq</Link></li>
                                <li><Link to="/projects">projects</Link></li>
                                <li><Link to="/projectsTwo">projects 2</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/pricingTwo">Pricing 2</Link></li>
                                <li><Link to="/servicesTwo">services 2</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <a href="#" onClick={handleSearch} className="search-btn"><i className="fas fa-search"></i></a>
                            <div className={search ? 'search-box' : 'search-box show'}>
                                <form action="#">
                                    <input type="text" placeholder="Search"/>
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <a href="contact.html" className="theme-btn d-none d-sm-block">Get Free Quote</a>
                    <a href="#" onClick={handleOffset} className="side-menu-toggle d-none d-xl-block"><i className="fal fa-bars"></i></a>
                    <div className="d-inline-block ms-4 d-xl-none">
                        <div className="mobile-nav-wrap">                    
                            <div id="hamburger" onClick={handleMobileMenu}>
                                <i className="fal fa-bars"></i>
                            </div>
                     
                            <div className={mobileMenu ? 'mobile-nav' : 'mobile-nav show'}>
                                <button onClick={handleMobileMenu} type="button" className="close-nav">
                                    <i className="fal fa-times-circle"></i>
                                </button>
                                <nav className="sidebar-nav">
                                    <ul className="metismenu" id="mobile-menu">
                                        <li><a className="has-arrow" href="#">Homes</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/">homepage 1</Link></li>
                                                <li><Link to="/homeTwo">homepage 2</Link></li>
                                                <li><Link to="/homeThree">homepage 3</Link></li>
                                                <li><Link to="homeFour">homepage 4</Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/projects">portfolio</a></li>
                                        <li>
                                            <a className="has-arrow" href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><Link to="/faq">faq</Link></li>
                                                <li><Link to="services-details.html">services details</Link></li>
                                                <li><Link to="/team">Team</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/news">News</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
        
                                <div className="action-bar">
                                    <a href="mailto:modinatheme@gmail.com"><i className="fal fa-envelope"></i>info@webmail.com</a>
                                    <a href="tel:123-456-7890"><i className="fal fa-phone"></i>987-098-098-09</a>
                                    <a href="contact.html" className="d-btn theme-btn">Contact Us</a>
                                </div>
                            </div>                            
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default HeaderOne;