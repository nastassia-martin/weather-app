import { useState } from "react";
import { getLocation } from "./services/geocoding";
import SearchLocation from "./components/SearchLocation";
import { LocationResult } from "./services/geocoding.types";
import LocationResults from "./components/LocationResults";
import { getForecast } from "./services/weatherforecast";
import { WeatherResponse } from "./services/weatherforecast.types";
import WeatherForecast from "./components/WeatherForecast";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";

interface SelectedLocation {
	data: WeatherResponse;
	location: string;
	locationCountry: string;
}

export type TemperatureUnit = "celsius" | "fahrenheit";

function App() {
	const [locationResults, setLocationResults] = useState<
		LocationResult[] | null
	>(null);

	const [selectedLocation, setSelectedLocation] =
		useState<SelectedLocation | null>(null);

	const [temperatureUnit, setTemperatureUnit] =
		useLocalStorage<TemperatureUnit>("celsius", "tempunit");

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | false>(false);

	const handleSearchSubmit = async (location: string) => {
		setError(false);
		setIsLoading(true);
		try {
			const data = await getLocation(location);
			setLocationResults(data);
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
		}
		setIsLoading(false);
	};

	const handleLocationClick = async (
		latitude: number,
		longitude: number,
		timezone: string,
		location: string,
		locationCountry: string
	) => {
		setError(false);
		setIsLoading(true);
		try {
			const data = await getForecast(
				latitude,
				longitude,
				timezone,
				temperatureUnit
			);
			setSelectedLocation({ data, location, locationCountry });
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
		}
		setLocationResults(null);
		setIsLoading(false);
	};

	const handleToggleTempUnit = (toggle: TemperatureUnit) => {
		const updatedTemp = toggle === "celsius" ? "fahrenheit" : "celsius";
		setTemperatureUnit(updatedTemp);
	};

	return (
		<main className="container">
			<Header
				temperatureUnit={temperatureUnit}
				onHeaderClick={handleToggleTempUnit}
			/>
			<SearchLocation onSearch={handleSearchSubmit} />

			{isLoading && <span>loading...</span>}
			{error && <span>{error}</span>}

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
		</main>
	);
}

export default App;
