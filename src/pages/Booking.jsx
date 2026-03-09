import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Booking() {
    const location = useLocation();
    const navigate = useNavigate();
    const destination = location.state?.destination || "Unknown";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        people: "",
        date: "",
        payment: "credit"
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number";
        }
        if (!formData.people || parseInt(formData.people) <= 0) {
            newErrors.people = "Enter a valid number of travelers (min 1)";
        } else if (parseInt(formData.people) > 20) {
            newErrors.people = "Maximum 20 travelers per booking";
        }
        if (!formData.date) {
            newErrors.date = "Select a travel date";
        } else {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate <= today) {
                newErrors.date = "Travel date must be in the future";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="booking-page container" id="booking-page">
                <div className="booking-card">
                    <div className="booking-card__icon">✓</div>
                    <h2 className="booking-card__title">Booking Confirmed!</h2>
                    <p className="booking-card__subtitle">
                        Thank you, <strong>{formData.name}</strong>! Your trip to{" "}
                        <strong>{destination}</strong> has been booked.
                    </p>

                    <div className="booking-summary">
                        <div className="booking-summary__row">
                            <span className="booking-summary__label">Destination</span>
                            <span className="booking-summary__value">{destination}</span>
                        </div>
                        <div className="booking-summary__row">
                            <span className="booking-summary__label">Travelers</span>
                            <span className="booking-summary__value">{formData.people} person(s)</span>
                        </div>
                        <div className="booking-summary__row">
                            <span className="booking-summary__label">Travel Date</span>
                            <span className="booking-summary__value">{formData.date}</span>
                        </div>
                        <div className="booking-summary__row">
                            <span className="booking-summary__label">Email</span>
                            <span className="booking-summary__value">{formData.email}</span>
                        </div>
                        <div className="booking-summary__row">
                            <span className="booking-summary__label">Phone</span>
                            <span className="booking-summary__value">{formData.phone}</span>
                        </div>
                        <div className="booking-summary__row">
                            <span className="booking-summary__label">Payment</span>
                            <span className="booking-summary__value">
                                {formData.payment === "credit" ? "Credit Card" : formData.payment === "debit" ? "Debit Card" : formData.payment === "upi" ? "UPI" : "Net Banking"}
                            </span>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-lg" onClick={() => navigate("/destinations")}>
                        Explore More Destinations
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page container" id="booking-page">
            <h1 className="section-title">Book Your Trip</h1>

            <div className="booking-form-layout">
                {/* Destination Info Sidebar */}
                <div className="booking-aside">
                    <div className="booking-aside__card">
                        <div className="booking-aside__icon">✈</div>
                        <h3 className="booking-aside__label">Your Destination</h3>
                        <div className="booking-aside__destination">{destination}</div>
                        <p className="booking-aside__note">
                            Fill in your details to confirm this booking.
                        </p>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="contact-form">
                    <h3>Traveler Details</h3>
                    <form onSubmit={handleSubmit} id="booking-form" noValidate>

                        <div className="form-group">
                            <label htmlFor="booking-name">Full Name *</label>
                            <input
                                type="text"
                                id="booking-name"
                                name="name"
                                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="booking-email">Email Address *</label>
                                <input
                                    type="email"
                                    id="booking-email"
                                    name="email"
                                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="form-error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="booking-phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="booking-phone"
                                    name="phone"
                                    className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <span className="form-error">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="booking-people">Number of Travelers *</label>
                                <input
                                    type="number"
                                    id="booking-people"
                                    name="people"
                                    className={`form-input ${errors.people ? 'form-input--error' : ''}`}
                                    placeholder="2"
                                    min="1"
                                    max="20"
                                    value={formData.people}
                                    onChange={handleChange}
                                />
                                {errors.people && <span className="form-error">{errors.people}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="booking-date">Travel Date *</label>
                                <input
                                    type="date"
                                    id="booking-date"
                                    name="date"
                                    className={`form-input ${errors.date ? 'form-input--error' : ''}`}
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                                {errors.date && <span className="form-error">{errors.date}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="booking-payment">Payment Method *</label>
                            <select
                                id="booking-payment"
                                name="payment"
                                className="form-input"
                                value={formData.payment}
                                onChange={handleChange}
                            >
                                <option value="credit">Credit Card</option>
                                <option value="debit">Debit Card</option>
                                <option value="upi">UPI</option>
                                <option value="netbanking">Net Banking</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;
