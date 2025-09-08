import { TemperatureUnit } from "../App";

interface HeaderProps {
	temperatureUnit: TemperatureUnit;
	onHeaderClick: (toggle: TemperatureUnit) => void;
}

const Header: React.FC<HeaderProps> = ({ temperatureUnit, onHeaderClick }) => {
	return (
		<header className="wrapper">
			<h1>Kolla vädret idag</h1>
			<button onClick={() => onHeaderClick(temperatureUnit)}>
				{temperatureUnit}
			</button>
		</header>
	);
};

export default Header;
