import React from "react";
import GetApi from "./GetApi";
import LocationBox from "./LocationBox";
import WeatherBox from "./WeatherBox";

export default class WeatherMain extends React.Component {
	constructor() {
		super();
		this.getApi = new GetApi();
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
		this.keyPress = this.keyPress.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	keyPress(e) {
		if (e.keyCode === 13) {
			this.fetchApi();
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

				this.forceUpdate();
			})
			.catch(() => {
				alert("Por favor, insira uma localização válida")
			});
	}

	render() {
		return (
			<div>
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="cidade" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}></input>
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
