import React from "react";
import Preloader from "./components/Preloader";

// The Preloader component is the first component to be rendered in the page
// due React components "top to bottom" workflow.
function App() {
	return (
		<div className="App">
			<main>
				<Preloader />
			</main>
		</div>
	);
}

export default App;
