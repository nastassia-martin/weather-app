import { LocationResult } from "../services/geocoding.types";

interface LocationResultsProps {
	locationResults: LocationResult[] | null;
	onClick: (latitude: number, longitude: number, timezone: string) => void;
}
const LocationResults: React.FC<LocationResultsProps> = ({
	locationResults,
	onClick,
}) => {
	return (
		locationResults && (
			<ul className="list" role="listbox" aria-label="list of locations">
				{locationResults.map((item) => (
					<li key={item.id} className="list-item">
						<button
							onClick={() =>
								onClick(item.latitude, item.longitude, item.timezone)
							}
						>
							<span>{item.name}, </span>
							<span>{item.admin1}, </span>
							<span>{item.country}</span>
						</button>
					</li>
				))}
			</ul>
		)
	);
};

export default LocationResults;
