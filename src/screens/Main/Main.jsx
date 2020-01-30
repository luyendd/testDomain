import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from 'screens/Home/Home';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Contact from 'screens/Contact/Contact';
import About from 'screens/About/About';
import Courses from 'screens/Courses/Courses';
import CourseDetail from 'screens/CourseDetail/CourseDetail';
import TeacherDetail from 'screens/TeacherDetail/TeacherDetail';
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
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/courses">
							<Courses />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/course/:courseId">
							<CourseDetail />
						</Route>
						<Route path="/teacher/:teacherId">
							<TeacherDetail />
						</Route>
					</Switch>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default Main;
