import { useState } from "react";
import { getLocation } from "./services/geocoding";
import SearchLocation from "./components/SearchLocation";
import { LocationResult } from "./services/geocoding.types";
import LocationResults from "./components/LocationResults";
import { getForecast } from "./services/weatherforecast";
import { WeatherResponse } from "./services/weatherforecast.types";

function App() {
	const [locationResults, setLocationResults] = useState<
		LocationResult[] | null
	>(null);

	const [selectedLocation, setSelectedLocation] =
		useState<WeatherResponse | null>(null);

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
		timezone: string
	) => {
		try {
			const data = await getForecast(latitude, longitude, timezone, "celsius");
			setSelectedLocation(data);
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
				<div className="weather">
					<div className="weather-results-header">
						<h2>Place...</h2>
						<span>time</span>
					</div>
					<div className="test">
						<h3>5-dygnsprognos</h3>
						<div className="wrapper">
							{/* today */}
							<div>
								<div>
									<span>idag</span>
									<span aria-label="weather description">icon</span>
								</div>
								<div>
									<span>luftighet</span>
									<span>känns som</span>
									<span>temperatur</span>
									<span>vind</span>
								</div>
							</div>
							{/* rest of weather */}
							<div>
								<span>date</span>
								<span>icon</span>
								<span>min</span>
								<span>max</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
