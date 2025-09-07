export interface WeatherResponse {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_units: CurrentUnits;
	current: CurrentWeather;
	daily_units: DailyUnits;
	daily: DailyWeather;
}

interface CurrentUnits {
	time: string; // "iso8601"
	interval: string; // "seconds"
	temperature_2m: string; // "°C"
	weather_code: string; // "wmo code"
	wind_speed_10m: string; // "km/h"
	apparent_temperature: string; // e.g. "°C"
	precipitation: string; // "mm"
}

export interface CurrentWeather {
	time: string; // ISO datetime
	interval: number; // seconds
	temperature_2m: number;
	weather_code: number;
	wind_speed_10m: number;
	apparent_temperature: number;
	precipitation: number;
}

interface DailyUnits {
	time: string; //  "iso8601"
	weather_code: string; // "wmo code"
	apparent_temperature_min: string; // "°C"
	apparent_temperature_max: string; // "°C"
}

export interface DailyWeather {
	time: string[]; // ISO dates
	weather_code: number[];
	apparent_temperature_min: number[];
	apparent_temperature_max: number[];
}
