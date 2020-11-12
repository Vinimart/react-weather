import React from "react";
import GetApi from "./GetApi";
import SearchBox from "./SearchBox";
import LocationBox from "./LocationBox";
import WeatherBox from "./WeatherBox";

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
				<div>
					<SearchBox />

					<div className="weather-main">
						<LocationBox city={this.weather.city} country={this.weather.country} />
						<WeatherBox temp={this.weather.temp} desc={this.weather.desc} />
					</div>
				</div>
			);
		} else {
			return "";
		}
	}
}
