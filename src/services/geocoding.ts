/**
 * Open Meteo Geocoding API
 * https://open-meteo.com/en/docs/geocoding-api>
 * used to extract longitude and latitude
 */

import { LocationResult } from "./geocoding.types";

const GEOCODINGURL = "https://geocoding-api.open-meteo.com/v1/search";

/**
 * Params
 * @param place place or city
 * @param count max number of results
 * @param language language code, english if not available
 * */

export const getLocation = async (place: string) => {
	const response = await fetch(
		`${GEOCODINGURL}/?name=${place}&count=10&language=sv&format=json`
	);

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	const data: { results: LocationResult[] } = await response.json();

	if (response.ok && !data.results) {
		throw new Error("Location not found");
	}
	// Return location [{}]
	return data.results;
};
