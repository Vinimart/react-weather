import React from "react";
import spinner from "../assets/preloader.svg";
import WeatherMain from "./WeatherMain";

export default class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.hideLoader = this.hideLoader.bind(this);
    }

    hideLoader() {
        setTimeout(() => {
            this.preloader.style.display = "none";
        }, 1000);
    }

    render() {
        return (
            <div>
                <div
                    id="preloader"
                    className="preloader"
                    ref={(c) => {
                        this.preloader = c;
                    }}>
                    <img src={spinner} alt="preloader"></img>
                </div>
                <WeatherMain onLoaded={this.hideLoader} />
            </div>
        );
    }
}
