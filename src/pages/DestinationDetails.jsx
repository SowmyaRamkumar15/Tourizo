import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";

function DestinationDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const destination = destinations.find(
        (dest) => dest.id === parseInt(id)
    );

    if (!destination) {
        return (
            <div className="detail-page container">
                <div className="detail-page__not-found">
                    <h2>Destination not found</h2>
                    <p>The destination you&apos;re looking for doesn&apos;t exist.</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/destinations")}
                    >
                        Back to Destinations
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="detail-page container" id="detail-page">
            <a
                className="detail-page__back"
                onClick={() => navigate("/destinations")}
                role="button"
                tabIndex={0}
            >
                ← Back to Destinations
            </a>

            <div className="detail-page__layout">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="detail-page__image"
                />

                <div className="detail-page__info">
                    <h1 className="detail-page__name">{destination.name}</h1>

                    <div className="detail-page__meta">
                        <span className="detail-page__meta-item">
                            📍 {destination.country}
                        </span>
                        <span className="detail-page__meta-item badge">
                            {destination.type}
                        </span>
                    </div>

                    <p className="detail-page__description">{destination.description}</p>

                    <div className="detail-page__price-block">
                        <div>
                            <div className="detail-page__price">${destination.price}</div>
                            <div className="detail-page__price-label">per person</div>
                        </div>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate("/booking", { state: { destination: destination.name } })}
                        >
                            Book This Trip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationDetails;
