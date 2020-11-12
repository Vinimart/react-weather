import React from "react";
import WeatherMain from "./WeatherMain";

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "Brasília" };

		this.handleChange = this.handleChange.bind(this);
		// this.keyPress = this.keyPress.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	keyPress(e) {
		if (e.keyCode === 13) {
			console.log(this.state.value);
		}
	}

	async setQuery() {
		return this.state.value;
	}

	render() {
		return (
			<div>
				<div className="search-box">
					<input type="text" className="search-bar" placeholder="cidade" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}></input>
				</div>

		
			</div>
		);
	}
}
