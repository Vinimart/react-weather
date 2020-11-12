import SearchBox from "./components/SearchBox";
import WeatherMain from "./components/WeatherMain";

function App() {
	return (
		<div className="App">
			<main>
				<div className="weather-container">
					<SearchBox />

					<WeatherMain />
				</div>
			</main>
		</div>
	);
}

export default App;
