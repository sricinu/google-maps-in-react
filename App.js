import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./client/scomponents/Home";


class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
