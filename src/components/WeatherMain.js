import React from "react";
import GetApi from "./GetApi";
import LocationBox from "./WeatherMain/LocationBox";
import WeatherBox from "./WeatherMain/WeatherBox";

export default class WeatherMain extends React.Component {
	constructor() {
		super();
		this.getApi = new GetApi();
		this.state = { value: "Itajaí" };
		this.handleChange = this.handleChange.bind(this);
		this.keyPress = this.keyPress.bind(this);
		this.fetchApi();
	}

	changeBackground(temp) {
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
				console.log("default case");
				this.setBackground(this.bg);
				break;
		}
	}

	setBackground(bg) {
		const classList = this.app.classList;
		while (classList.length > 1) {
			classList.remove(classList.item(1));
		}
		this.app.classList.add(bg);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	keyPress(e) {
		if (e.keyCode === 13) {
			if (this.prevQuery === this.state.value) {
				return;
			} else {
				this.fetchApi();
			}
		}
	}

	fetchApi() {
		this.getApi
			.fetchWeather(this.state.value)
			.then((res) => {
				this.weather = {
					city: res.name,
					country: res.sys.country,
					temp: Math.round(res.main.temp),
					desc: res.weather[0].description,
				};

				this.prevQuery = this.state.value;
				this.app = document.querySelector(".App");
				this.changeBackground(this.weather.temp);
				this.forceUpdate();
			})
			.catch(() => {
				alert("Por favor, insira uma localização válida");
			});
	}

	render() {
		return (
			<div className="weather-container">
				<div className="search-box">
					<input type="text" className="search-bar" autoFocus placeholder="Insira uma localização e pressione 'enter'" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}></input>
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
