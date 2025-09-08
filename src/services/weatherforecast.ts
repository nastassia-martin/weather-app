/**
 * Open Meteo Geocoding API
 * https://open-meteo.com/en/docs
 * used to fetch weather forecast
 */

import { WeatherResponse } from "./weatherforecast.types";

const WEATHERFORECASTURL = "https://api.open-meteo.com/v1/forecast";

//?&current=temperature_2m,weather_code,wind_speed_10m,apparent_temperature,precipitation
/**
 * Params
 * @param latitude Geographical WGS84 coordinates of the location
 * @param longitude Geographical WGS84 coordinates of the location
 * @param timezone If timezone is set, all timestamps are returned as local-time
 * @param temperature_unit default is celsius otherwise Fahrenheit
 * */

export const getForecast = async (
	latitude: number,
	longitude: number,
	timezone: string,
	temperature_unit: string
) => {
	const response = await fetch(
		`${WEATHERFORECASTURL}?latitude=${latitude}&
		longitude=${longitude}&
		timezone=${timezone}&
		current=temperature_2m,weather_code,wind_speed_10m,apparent_temperature,precipitation,is_day,relative_humidity_2m&
		daily=weather_code,apparent_temperature_min,apparent_temperature_max&forecast_days=5&
		temperature_unit=${temperature_unit}`
	);

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	const data: WeatherResponse = await response.json();

	return data;
};
