import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate("/destinations");
    };

    return (
        <section className="hero" id="hero-section">
            <div className="hero__content">
                <span className="hero__badge">✈ Travel with Confidence</span>
                <h1 className="hero__title">
                    Welcome to <span>Tourizo</span>
                </h1>
                <h2 className="hero__subtitle">Your Travel Partner</h2>
                <p className="hero__text">
                    Discover amazing destinations around the globe and book your
                    next unforgettable adventure with us.
                </p>
                <div className="hero__cta">
                    <button className="btn btn-primary btn-lg" onClick={handleExplore}>
                        Explore Destinations
                    </button>
                    <button className="btn btn-outline btn-lg" onClick={() => navigate("/contact")}>
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Home;