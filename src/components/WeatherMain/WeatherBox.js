import React from "react";

export default class WeatherBox extends React.Component {
	constructor() {
		super();
        this.metric = "°C";
	}

	render() {
		return (
			<div className="weather-box">
				<div className="temp">{`${this.props.temp}${this.metric}`}</div>
				<div className="weather">{this.props.desc}</div>
			</div>
		);
	}
}
