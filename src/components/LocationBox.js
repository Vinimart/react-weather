import React from "react";

export default class LocationBox extends React.Component {
	render() {
		return (
			<div className="location-box">
				<div className="location">
					{this.props.city}, {this.props.country}
				</div>
				<div className="date">Quarta-feira, 11 de nov. de 2020</div>
			</div>
		);
	}
}
