import { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All");

    const filteredDestinations = destinations
        .filter((dest) =>
            dest.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((dest) =>
            filterType === "All" ? true : dest.type === filterType
        );

    const filterOptions = ["All", "Beach", "City"];

    return (
        <div className="destinations-page container" id="destinations-page">
            <h1 className="section-title">Explore Destinations</h1>

            <div className="destinations-page__controls">
                <div className="destinations-page__search">
                    <span className="destinations-page__search-icon">🔍</span>
                    <input
                        type="text"
                        id="destination-search"
                        placeholder="Search destinations..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="destinations-page__filters">
                    {filterOptions.map((type) => (
                        <button
                            key={type}
                            className={`filter-btn ${filterType === type ? 'active' : ''}`}
                            onClick={() => setFilterType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="destinations-page__grid">
                {filteredDestinations.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        destination={destination}
                    />
                ))}
            </div>

            {filteredDestinations.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--text-muted)" }}>
                    No destinations found. Try a different search.
                </p>
            )}
        </div>
    );
}

export default Destinations;
