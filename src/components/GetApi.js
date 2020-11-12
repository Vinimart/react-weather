import React from "react";
import ApiKey from "./ApiKey";

export default class GetApi extends React.Component {
	constructor() {
		super();
		this.key = ApiKey.key;
		this.base = ApiKey.base;
		this.query = "Brasília";
		this.lang = "pt_br";
		this.unit = "metric";
		this.weather = {};
	}

	async fetchWeather() {
		const response = await fetch(`${this.base}weather?q=${this.query}&lang=${this.lang}&units=${this.unit}&appid=${this.key}`);
		const data = await response.json();
		return data;
	}

	setResults(response) {
		return (this.weather = response);
	}

	cityName() {
		return this.weather.name;
	}

	countryName() {
		return this.weather.sys.country;
	}
}
