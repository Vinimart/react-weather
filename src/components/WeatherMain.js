import React from "react";
import LocationBox from "./LocationBox";
import GetApi from "./GetApi";

export default class WeatherMain extends React.Component {
	constructor() {
		super();
		this.getApi = new GetApi();
		this.state = { result: {} };
	}

	componentDidMount() {
		this.getApi.fetchWeather().then((res) => {
			this.setState({ result: res });
		});
   }

	render() {
		if (this.state.result !== undefined) {
			return (
				<div className="weather-main">
					<LocationBox city={this.state.result.name} country="" />

					<div className="weather-box">
						<div className="temp">21ºC</div>
						<div className="weather">Nublado</div>
					</div>
				</div>
			);
		} else {
			return "";
		}
	}
}
