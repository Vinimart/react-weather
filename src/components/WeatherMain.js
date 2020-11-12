import React from "react";
import LocationBox from "./LocationBox";
import GetApi from "./GetApi";

export default class WeatherMain extends React.Component {
	constructor() {
		super();
		this.getApi = new GetApi();
	}

	componentDidMount() {
		this.getApi.fetchWeather().then((res) => {

			this.weather = {
				city: res.name,
				country: res.sys.country,
				temp: res.main.temp,
				desc: res.weather[0].description,
			};

			this.forceUpdate();
		});
	}

	render() {
		if (this.weather !== undefined) {
			return (
				<div className="weather-main">
					<LocationBox city={this.weather.city} country={this.weather.country} />

					<div className="weather-box">
						<div className="temp">{this.weather.temp}</div>
						<div className="weather">{this.weather.desc}</div>
					</div>
				</div>
			);
		} else {
			return "";
		}
	}
}
