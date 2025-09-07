function App() {
	return (
		<>
			<div className="container">
				<div className="wrapper">
					<h1>Kolla vädret idag</h1>
					<button>celcius</button>
				</div>
				{/* search form*/}
				<div className="search-wrapper">
					<form className="search-form">
						<input
							type="text"
							placeholder="Ange plats att söka upp"
							aria-label="Stad"
							aria-details="Sök efter stad för att visa aktuellt väder"
						/>
						<button type="submit">Sök</button>
					</form>
				</div>
				{/* search results*/}
				<div className="results-wrapper">
					<div className="wrapper">
						<span>ortsnamn</span>
						<span>område</span>
						<span>land</span>
					</div>
					<ul className="list" aria-label="Stad lister">
						<li aria-label="stad">ort resultater...</li>
					</ul>
				</div>
				{/* weather results*/}
				<div className="weather-results-wrapper">
					<div className="weather-results-header">
						<h2>Place...</h2>
						<span>time</span>
					</div>
					<div>
						<h3>5-dygnsprognos</h3>
						<div>
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
