import React from 'react';
import { connect } from 'react-redux';
import EduTeachers from 'components/EduTeachers/EduTeachers';
import EduCenters from 'components/EduCenters/EduCenters';
import { getClassRoomsHomeByTeachers, getClassRoomsHomeByCenters } from './redux';

class EduHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.getClassRoomsHomeByTeachers();
		this.props.getClassRoomsHomeByCenters();
	}

	render() {
		return (
			<>
				<EduTeachers data={this.props.classRoomsHomeByTeachers} route={'Home'} image={'./assets/images/edu-banner.png'} />
				<EduCenters data={this.props.classRoomsHomeByCenters} image={'./assets/images/edu-banner.png'} />
			</>
		)
	}
}

const mapStateToProps = state => ({
	classRoomsHomeByTeachers: state.ClassRoomsHomeByTeachers,
	classRoomsHomeByCenters: state.ClassRoomsHomeByCenters,
});


const mapDispatchToProps = dispatch => ({
	getClassRoomsHomeByTeachers: payload => dispatch(getClassRoomsHomeByTeachers(payload)),
	getClassRoomsHomeByCenters: payload => dispatch(getClassRoomsHomeByCenters(payload))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(EduHome);