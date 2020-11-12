import React from "react";

export default class WeatherBox extends React.Component {
	constructor(props) {
        super(props);
        this.metric = "°C";
		this.tempView(this.props.temp);
		this.descCaptalize(this.props.desc);
	}

	tempView(temp) {
		this.temp = Math.round(temp);
		return (this.tempView = `${this.temp}${this.metric}`);
	}

	descCaptalize(desc) {
		this.desc = desc.charAt(0).toUpperCase() + desc.slice(1);
		return this.desc;
	}

	render() {
		return (
			<div className="weather-box">
				<div className="temp">{this.tempView}</div>
				<div className="weather">{this.desc}</div>
			</div>
		);
	}
}
