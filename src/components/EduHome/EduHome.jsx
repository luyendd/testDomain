import React from 'react';
import EduTeachers from 'components/EduTeachers/EduTeachers';
import EduCenters from 'components/EduCenters/EduCenters';

class EduHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<EduTeachers route={'Home'} image={'./assets/images/edu-banner.png'}/>
				<EduCenters image={'./assets/images/edu-banner.png'}/>
			</div>
		)
	}
}

export default EduHome;