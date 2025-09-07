import { LocationResult } from "../services/geocoding.types";

interface LocationResultsProps {
	LocationResults: LocationResult[] | null;
}

const LocationResults: React.FC<LocationResultsProps> = ({
	LocationResults,
}) => {
	return (
		<ul className="list" aria-label="list of locations">
			{LocationResults &&
				LocationResults.map((item) => (
					<li key={item.id} className="list-item">
						<span>{item.name}, </span>
						<span>{item.admin1}, </span>
						<span>{item.country}</span>
					</li>
				))}
		</ul>
	);
};

export default LocationResults;
