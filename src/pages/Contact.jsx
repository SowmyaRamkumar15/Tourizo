import { useState } from "react";

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.message){
            setStatus("Please fill in all fields.");
            setIsSuccess(false);
            return;
        }

        setStatus("Message sent successfully!");
        setIsSuccess(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className="contact-page container" id="contact-page">
            <h1 className="section-title">Contact Us</h1>

            <div className="contact-page__layout">
                <div className="contact-page__info">
                    <h2>Let&apos;s Plan Your Trip</h2>
                    <p>
                        Have a question or want to book a custom tour? 
                        Reach out to us and our travel experts will get back to you shortly.
                    </p>

                    <div className="contact-page__detail">
                        <div className="contact-page__detail-icon">✉</div>
                        <div className="contact-page__detail-text">
                            <h4>Email</h4>
                            <p>tourizo@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-page__detail">
                        <div className="contact-page__detail-icon">📞</div>
                        <div className="contact-page__detail-text">
                            <h4>Phone</h4>
                            <p>+91 9876543210</p>
                        </div>
                    </div>

                    <div className="contact-page__detail">
                        <div className="contact-page__detail-icon">📍</div>
                        <div className="contact-page__detail-text">
                            <h4>Address</h4>
                            <p>123 , Coimbatore, Tamil Nadu</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Send a Message</h3>
                    <form onSubmit={handleSubmit} id="contact-form">
                        <div className="form-group">
                            <label htmlFor="contact-name">Your Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email">Your Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                className="form-input"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Your Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell us about your dream trip..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                            Send Message
                        </button>
                    </form>

                    {status && (
                        <div className={`status-message ${isSuccess ? 'status-message--success' : 'status-message--error'}`}>
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
