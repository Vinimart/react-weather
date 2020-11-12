import React from "react";

export default class SearchBox extends React.Component {
	render() {
		return (
			<div className="search-box">
				<input type="text" className="search-bar" placeholder="cidade"></input>
			</div>
		);
	}
}
