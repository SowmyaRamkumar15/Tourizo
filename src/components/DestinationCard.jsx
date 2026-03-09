import { useNavigate } from "react-router-dom";

function DestinationCard({ destination }) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/destination/${destination.id}`);
    };

    const handleBooking = () => {
        navigate("/booking", { state: { destination: destination.name } });
    };

    return (
        <div className="destination-card" id={`card-${destination.id}`}>
            <div className="destination-card__image-wrapper">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-card__image"
                />
                <span className="badge destination-card__type">{destination.type}</span>
            </div>

            <div className="destination-card__body">
                <h3 className="destination-card__name">{destination.name}</h3>
                <p className="destination-card__country">{destination.country}</p>
                <p className="destination-card__description">{destination.description}</p>

                <div className="destination-card__footer">
                    <div className="destination-card__price">
                        ${destination.price} <span>/ person</span>
                    </div>
                    <div className="destination-card__actions">
                        <button className="btn btn-outline btn-sm" onClick={handleViewDetails}>
                            Details
                        </button>
                        <button className="btn btn-primary btn-sm" onClick={handleBooking}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
