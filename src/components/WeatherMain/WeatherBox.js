import React from "react";

// Temperature and climate description view
export default class WeatherBox extends React.Component {
	constructor() {
		super();
        this.unit = "°C";
	}

	render() {
		return (
			<div className="weather-box">
				<div className="temp">{`${this.props.temp}${this.unit}`}</div>
				<div className="weather">{this.props.desc}</div>
			</div>
		);
	}
}
