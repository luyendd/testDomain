import React from 'react';
import Banner from 'components/Banner/Banner';
import EduType from 'components/EduType/EduType';
import EduTeachers from 'components/EduTeachers/EduTeachers';
import EduCenters from 'components/EduCenters/EduCenters';
import EduCoach from 'components/EduCoach/EduCoach';
import QuickFilterBar from 'components/QuickFilterBar/QuickFilterBar';

class Courses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	changeSort = (item) => {
		//do smt here
	}

	render() {
		return (
			<div>
				<Banner toggle={true} />
				<div className="container">
					<EduType />

					<QuickFilterBar changeSort={this.changeSort} />

					<EduTeachers />

					<EduCenters />

					<EduCoach />
				</div>
			</div>
		)
	}
}

export default Courses;