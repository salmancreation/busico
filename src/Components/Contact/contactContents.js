import { Link } from "react-router-dom";
import contactForm from "./contactForm";


const contactContents = () => {
    return (

        <div className="contact-us-wrapper section-padding">
            <div className="container">
                <div className="row eq-height">
                <div className="col-lg-8 col-12">
                    <div className="contact-form"> 
                    <h2>Get in Touch</h2>                                                       
                    <contactForm/>
                    <span className="form-message" />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="contact-us-sidebar mt-5 mt-lg-0">
                        <div className="contact-info">
                            <h2>CONTACT INFO</h2>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-email" />
                                </div>
                                <div className="text">
                                    <span>Email Us</span>
                                    <h5>info@example.com</h5>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-phone-call-1" />
                                </div>
                                <div className="text">
                                    <span>Call Us</span>
                                    <h5>+673 853 605 985</h5>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-pin" />
                                </div>
                                <div className="text">
                                    <span>Location</span>
                                    <h5>4821 Mainer St NY, USA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="live-chat">
                            <h2>Live Chat</h2>
                            <p>You can contact us on chat and explain 
                            your problems</p>
                            <Link to="/"><i className="flaticon-chatting" /> Live Chat to Executive</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default contactContents;