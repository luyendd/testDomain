import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from 'screens/Home/Home';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import './Main.scss';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Router>
				<div className="container-fluid">
				<Header />
					<Switch>
						{/* <Route path="/about">
							<About />
						</Route> */}
						<Route path="/">
							<Home />
						</Route>
					</Switch>

					<Footer />

				</div>
			</Router>
		);
	}
}

export default Main;
