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
import Centers from 'screens/Centers/Centers';
import Teachers from 'screens/Teachers/Teachers';
import Coaches from 'screens/Coaches/Coaches';
import News from 'screens/News/News';
import UserInformation from 'screens/UserInformation/UserInformation';
import Messenger from 'screens/Messenger/Messenger';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Login from 'screens/Login/Login';
import CenterDetail from 'screens/CenterDetail/CenterDetail';
import { initMain } from './redux';
import { connect } from 'react-redux';
import './Main.scss';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true,
		};
	}

	componentDidMount() {
		this.props.initMain();
	}

	hideComp = () => {
		this.setState({
			visible: false,
		});
	}

	showComp = () => {
		this.setState({
			visible: true,
		});
	}

	render() {
		return (
			<Router>
				<ScrollToTop>
					<div className="container-fluid">
						{this.state.visible === true && <Header />}
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
							<Route path="/centers">
								<Centers />
							</Route>
							<Route path="/teachers">
								<Teachers />
							</Route>
							<Route path="/coaches">
								<Coaches />
							</Route>
							<Route path="/news">
								<News />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/login">
								<Login hideComp={this.hideComp} showComp={this.showComp} />
							</Route>
							<Route path="/messenger">
								<Messenger hideComp={this.hideComp} />
							</Route>
							<Route path="/user-information">
								<UserInformation />
							</Route>
							<Route path="/course/:slug/:classId">
								<CourseDetail />
							</Route>
							<Route path="/teacher/:slug">
								<TeacherDetail />
							</Route>
							<Route path="/center/:slug">
								<CenterDetail />
							</Route>
						</Switch>

						{this.state.visible === true && <Footer />}
					</div>
				</ScrollToTop>
			</Router>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	initMain: () => dispatch(initMain()),
});

export default connect(
	null,
	mapDispatchToProps,
)(Main);
