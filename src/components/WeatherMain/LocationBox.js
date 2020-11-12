import React from "react";

export default class LocationBox extends React.Component {
	getDate() {
		const locale = "pt-br";
		const option = {
			year: "numeric",
			month: "short",
			weekday: "long",
			day: "numeric",
		};
		const newDate = new Date().toLocaleString(locale, option);
		this.date = newDate.charAt(0).toUpperCase() + newDate.slice(1);
		return this.date;
	}

	render() {
		return (
			<div className="location-box">
				<div className="location">
					{this.props.city}, {this.props.country}
				</div>
				<div className="date">{this.getDate()}</div>
			</div>
		);
	}
}
