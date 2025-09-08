import { useState } from "react";
import { getLocation } from "./services/geocoding";
import SearchLocation from "./components/SearchLocation";
import { LocationResult } from "./services/geocoding.types";
import LocationResults from "./components/LocationResults";
import { getForecast } from "./services/weatherforecast";
import { WeatherResponse } from "./services/weatherforecast.types";
import WeatherForecast from "./components/WeatherForecast";

interface SelectedLocation {
	data: WeatherResponse;
	location: string;
	locationCountry: string;
}

function App() {
	const [locationResults, setLocationResults] = useState<
		LocationResult[] | null
	>(null);

	const [selectedLocation, setSelectedLocation] =
		useState<SelectedLocation | null>(null);

	const handleSearchSubmit = async (location: string) => {
		try {
			const data = await getLocation(location);
			setLocationResults(data);
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
	};

	const handleLocationClick = async (
		latitude: number,
		longitude: number,
		timezone: string,
		location: string,
		locationCountry: string
	) => {
		try {
			const data = await getForecast(latitude, longitude, timezone, "celsius");
			setSelectedLocation({ data, location, locationCountry });
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
		setLocationResults(null);
	};

	return (
		<>
			<div className="container">
				<div className="wrapper">
					<h1>Kolla vädret idag</h1>
					<button>celsius</button>
				</div>
				<SearchLocation onSearch={handleSearchSubmit} />
				<LocationResults
					locationResults={locationResults}
					onClick={handleLocationClick}
				/>
				{selectedLocation && (
					<WeatherForecast
						weatherResults={selectedLocation.data}
						location={selectedLocation.location}
						locationCountry={selectedLocation.locationCountry}
					/>
				)}
			</div>
		</>
	);
}

export default App;
