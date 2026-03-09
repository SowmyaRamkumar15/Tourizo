import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer className="footer" id="site-footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__about">
                        <div className="footer__brand">Touri<span>zo</span></div>
                        <p className="footer__tagline">
                            Your trusted travel partner. We curate unforgettable
                            journeys to the world&apos;s most breathtaking destinations.
                        </p>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Quick Links</h4>
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/destinations" className="footer__link">Destinations</Link>
                        <Link to="/booking" className="footer__link">Book a Tour</Link>
                        <Link to="/contact" className="footer__link">Contact Us</Link>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Get in Touch</h4>
                        <p className="footer__link">✉ tourizo@gmail.com</p>
                        <p className="footer__link">📞 +91 9876543210</p>
                        <p className="footer__link">📍 123 , Coimbatore, Tamil Nadu</p>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} Tourizo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;