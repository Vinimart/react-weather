import React from "react";
import GetApi from "./GetApi";
import LocationBox from "./WeatherMain/LocationBox";
import WeatherBox from "./WeatherMain/WeatherBox";

// MVC was not implemented in this project, but this class can be compared with a Controller Layer,
// since most of the components of the project is managed by this class.
export default class WeatherMain extends React.Component {
	constructor() {
		super();
		this.getApi = new GetApi();

		// API Initial query
		this.state = { value: "Itajaí" };

		// Search Input event handlers
		this.handleChange = this.handleChange.bind(this);
		this.keyPress = this.keyPress.bind(this);

		// Calls the promise right at the initialization of the component.
		this.fetchApi();
	}

	// Identifies the range of temperature values ​​and associates it with a background image through CSS classes.
	changeBackground(temp) {
		this.app = document.querySelector(".App");
		this.bg = "warm";

		switch (true) {
			case temp <= 10:
				this.bg = "cold";
				this.setBackground(this.bg);
				break;

			case temp >= 11 && temp <= 25:
				this.bg = "warm";
				this.setBackground(this.bg);
				break;

			case temp >= 26 && temp <= 30:
				this.bg = "hot";
				this.setBackground(this.bg);
				break;

			case temp >= 31:
				this.bg = "hotter";
				this.setBackground(this.bg);
				break;

			default:
				this.setBackground(this.bg);
				break;
		}
	}

	// This method checks the size of the classList and removes any class other than "App". 
	// Soon afterwards it assigns the class referring to a background image.
	// This prevents classes from accumulating in the element's classList when there are background image changes
	setBackground(bg) {
		const classList = this.app.classList;
		while (classList.length > 1) {
			classList.remove(classList.item(1));
		}
		this.app.classList.add(bg);
	}

	// Event handles:
	// Stores a string whenever the state of the input target value changes.
	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	// This method, in addition to handling the keyDown event of the input search, prevents multiple requests to 
	// the API from happening when the same value is sent more than once in a row.
	keyPress(e) {
		// "Enter" key
		if (e.keyCode === 13) {
			if (this.prevQuery === this.state.value) {
				return;
			} else {
				this.fetchApi();
			}
		}
	}

	// Main method. Performs the HTTP request and handles the Promisse result.
	fetchApi() {
		this.getApi
			.fetchWeather(this.state.value)
			.then((res) => {
				// Tells the Preloader component that the content is alredy loaded.
				this.props.onLoaded();

				// Only the response data that will be used
				this.weather = {
					city: res.name,
					country: res.sys.country,
					temp: Math.round(res.main.temp),
					desc: res.weather[0].description,
				};

				// Stores the last result obtained through the HTTP request.
				this.prevQuery = this.state.value;

				// Changes the background image.
				this.changeBackground(this.weather.temp);

				// Forces a break in the component's life cycle in order to update the component's state with the data
				// obtained by the request.
				this.forceUpdate();
			})
			.catch(() => {
				console.warn("Por favor, insira uma localização válida");
			});
	}

	// The LocationBox and WeatherBox components will only be rendered when there is a positive response from Promisse.
	render() {
		return (
			<div className="weather-container">
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="Insira uma localização e pressione 'enter'" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}></input>
				</div>

				{this.weather ? (
					<div className="weather-main">
						<LocationBox city={this.weather.city} country={this.weather.country} />
						<WeatherBox temp={this.weather.temp} desc={this.weather.desc} />
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}
