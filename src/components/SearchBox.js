import React from "react";

export default class SearchBox extends React.Component {
	constructor() {
		super();
		this.placeholder = "Yo";
	}

	render() {
		return (
			<div className="search-box">
				<input type="text" className="search-bar" placeholder={this.placeholder}></input>
			</div>
		);
	}
}
