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
			const data = await getForecast(
				latitude,
				longitude,
				timezone,
				temperatureUnit
			);
			setSelectedLocation({ data, location, locationCountry });
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
		}
		setLocationResults(null);
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
