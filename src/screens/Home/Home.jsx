import React from 'react';
import Banner from 'components/Banner/Banner';
import TeachingType from 'components/TeachingType/TeachingType';
import Introduction from 'components/Introduction/Introduction';
import EduTeachers from 'components/EduTeachers/EduTeachers';
import EduCenters from 'components/EduCenters/EduCenters';
import MostSelectedCourses from 'components/MostSelectedCourses/MostSelectedCourses';
import TestHome from 'components/TestHome/TestHome';
import Luggage from 'components/Luggage/Luggage';
import EduMedia from 'components/EduMedia/EduMedia';

import './style.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Banner route={'Home'} />
				<TeachingType />
				<Introduction route={'Home'}/>
				<EduTeachers />
				<EduCenters />
				<MostSelectedCourses />
				<TestHome />
				<Luggage />
				<EduMedia />
			</div>
		);
	}
}

export default Home;
