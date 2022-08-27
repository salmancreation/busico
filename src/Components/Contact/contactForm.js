import React from "react";

const contactForm = () => {
    const [inputs, setInputs] = "";

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (

        <form onSubmit={handleSubmit} className="row" id="contact-form">
            <div className="col-md-6 col-12">
                <div className="single-personal-info">
                    <input type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange} 
                    defaultValue="Name" />                                         
                </div>
            </div>                            
            <div className="col-md-6 col-12">
                <div className="single-personal-info">
                    <input type="email" 
                    name="email"
                    value={inputs.email || ""} 
                    onChange={handleChange} 
                    defaultValue="Email" />                                         
                </div>
            </div>
            <div className="col-md-6 col-12">
                <div className="single-personal-info">
                    <input type="text"
                     name="phone"
                     value={inputs.phone || ""} 
                     onChange={handleChange} 
                     defaultValue="Number" />                                         
                </div>
            </div>                                      
            <div className="col-md-6 col-12">
                <div className="single-personal-info">
                    <input type="text" 
                    name="subject" 
                    value={inputs.subject || ""} 
                    onChange={handleChange} 
                    defaultValue="Subject" />                                         
                </div>
            </div>                                      
            <div className="col-md-12 col-12">
                <div className="single-personal-info">
                    <textarea name="message" 
                    value={inputs.message || ""} 
                    onChange={handleChange} 
                    defaultValue={""} />                                        
                </div>
            </div>                                      
            <div className="col-md-12 col-12">
                <input className="submit-btn" type="submit" defaultValue="Submit Now" />
            </div>                                      
        </form>

    )
}

export default contactForm;