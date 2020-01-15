import React from 'react';
import Banner from 'components/Banner/Banner';
import EduType from 'components/EduType/EduType';
import './Courses.scss';

class Courses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="container">
					<EduType />
				</div>
			</div>
		)
	}
}

export default Courses;