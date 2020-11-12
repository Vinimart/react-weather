import SearchBox from "./components/SearchBox";

function App() {
	return (
		<div className="App">
			<main>
				<div className="weather-container">
					<SearchBox />

					<div className="weather-main">
						<div className="location-box">
							<div className="location">Brasília, BR</div>
							<div className="date">Quarta-feira, 11 de nov. de 2020</div>
						</div>

						<div class="weather-box">
							<div class="temp">21ºC</div>
							<div class="weather">Nublado</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
