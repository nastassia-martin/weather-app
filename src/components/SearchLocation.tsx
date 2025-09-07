import { useState } from "react";
interface SearchLocationProps {
	onSearch: (location: string) => void;
}

const SearchLocation: React.FC<SearchLocationProps> = ({ onSearch }) => {
	const [location, setLocation] = useState("");
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(location);
		setLocation("");
	};
	return (
		<div className="search-wrapper">
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Ange plats att söka upp"
					aria-label="Stad"
					aria-details="Sök efter stad för att visa aktuellt väder"
					onChange={(e) => setLocation(e.target.value)}
					value={location}
				/>
				<button onSubmit={handleSubmit} type="submit">
					sök
				</button>
			</form>
		</div>
	);
};
export default SearchLocation;
