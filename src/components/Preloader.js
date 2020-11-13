import React from "react";
import spinner from "../assets/preloader.svg";
import WeatherMain from "./WeatherMain";

export default class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.hideLoader = this.hideLoader.bind(this);
    }

    // Hides the preloader when the page is loaded.
    // SetTimeout is used here to ensure that the background image of the page is completely loaded.
    hideLoader() {
        setTimeout(() => {
            this.preloader.style.display = "none";
        }, 3000);
    }

    // Render the WeatherMain components when the page is fully loaded.
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
