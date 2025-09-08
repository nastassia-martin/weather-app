import { WeatherResponse } from "../services/weatherforecast.types";
import iconCodes from "../weatherIconFile.json";

interface WeatherForecastProps {
	weatherResults: WeatherResponse | null;
	location: string;
	locationCountry: string;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({
	weatherResults,
	location,
	locationCountry,
}) => {
	return (
		weatherResults && (
			<div className="weather">
				<div className="weather-results-header">
					<h2>
						{location}, {locationCountry}
					</h2>
					<span>
						{new Date(weatherResults.current.time).toLocaleDateString()}
					</span>
				</div>
				<div>
					<h3>5-dygnsprognos</h3>
					<div className="grid weather-wrapper">
						<div className="grid border">
							<div className="weather-daily-item">
								<span>
									{new Date(weatherResults.current.time).toLocaleTimeString()}
								</span>
								<img
									className="weather-img"
									aria-label="weather description"
									src={`${
										iconCodes[weatherResults.current.weather_code][
											weatherResults.current.is_day ? "day" : "night"
										]["image"]
									}`}
									alt={`${
										iconCodes[weatherResults.current.weather_code][
											weatherResults.current.is_day ? "day" : "night"
										]["description"]
									}`}
								/>
							</div>
							<div className="weather-daily-item">
								<span>
									temperatur:{" "}
									{`${weatherResults.current.temperature_2m}${weatherResults.current_units.temperature_2m}`}
								</span>
								<span>
									känns som:{" "}
									{`${weatherResults.current.apparent_temperature}${weatherResults.current_units.temperature_2m}`}
								</span>
								<span>
									luftighet:{" "}
									{`${weatherResults.current.relative_humidity_2m}${weatherResults.current_units.relative_humidity_2m}`}
								</span>
								<span>
									vind:{" "}
									{`${weatherResults.current.wind_speed_10m}${weatherResults.current_units.wind_speed_10m}`}
								</span>
							</div>
						</div>
						<div className="grid  weather-wrapper">
							{weatherResults.daily.time.map(
								(date, index) =>
									index >= 1 && (
										<div key={index} className="weather-daily-item border">
											<span aria-label="date">
												{" "}
												{new Date(date).toLocaleDateString()}
											</span>
											<img
												className="weather-img"
												src={`${
													iconCodes[weatherResults.daily.weather_code[index]][
														"day"
													]["image"]
												}`}
												alt={`${
													iconCodes[weatherResults.daily.weather_code[index]][
														"day"
													]["desc"]
												}`}
											/>
											<span aria-label="min temperature">
												{`${weatherResults.daily.apparent_temperature_min[index]}${weatherResults.daily_units.apparent_temperature_min}`}
											</span>
											<span aria-label="max temperature">
												{`${weatherResults.daily.apparent_temperature_max[index]}${weatherResults.daily_units.apparent_temperature_max}`}
											</span>
										</div>
									)
							)}
						</div>
					</div>
				</div>
			</div>
		)
	);
};
export default WeatherForecast;
