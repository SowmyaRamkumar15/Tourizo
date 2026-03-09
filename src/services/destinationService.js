import { destinations } from "../data/destinations";

export const getDestinations = () => {
return destinations;
};

export const searchDestinations = (keyword) => {
return destinations.filter(dest =>
dest.name.toLowerCase().includes(keyword.toLowerCase())
);
};

export const filterDestinations = (type) => {
return destinations.filter(dest => dest.type === type);
};
