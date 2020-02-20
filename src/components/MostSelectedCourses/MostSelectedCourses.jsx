import React from 'react';
import { connect } from 'react-redux';
import CourseContent from './CourseContent/CourseContent';
import { getBestClassRoomsByCenter, getBestClassRoomsByTeacher } from './redux';
import './MostSelectedCourses.scss';

const courseTypes = [
	{ title: '#khoahocgiaotiep' },
	{ title: '#khoahocphatam' },
	{ title: '#IELTS' },
	{ title: '#TOEIC' },
	{ title: '#trungtam' },
];

class MostSelectedCourses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: 3,
		};
	}

	componentDidMount() {
		this.props.getBestClassRoomsByCenter();
		this.props.getBestClassRoomsByTeacher();
	}

	changeCourseType = (index) => {
		this.setState({
			activeTab: index,
		});
	}


	render() {
		return (
			<div className="container">
				<div className="row most-selected-course">
					<div className="edu-title">
						<h3>Khoá học được lựa chọn nhiều nhất</h3>
						<ul className="bt-list">
							{courseTypes.map((item, index) => {
								return (
									<li onClick={() => this.changeCourseType(index)} key={index} {...this.state.activeTab === index && { className: 'active' }}>{item.title}</li>
								)
							})}
						</ul>
					</div>

					<div className="row">
						<div className="col-6">
							<CourseContent data={this.props.bestClassRoomsByTeacher} title={'Edutalk Teacher'} />
						</div>
						<div className="col-6">
							<CourseContent data={this.props.bestClassRoomsByCenter} title={'Edutalk Center'} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	bestClassRoomsByCenter: state.BestClassRoomsByCenter,
	bestClassRoomsByTeacher: state.BestClassRoomsByTeacher,
});

const mapDispatchToProps = dispatch => ({
	getBestClassRoomsByCenter: payload => dispatch(getBestClassRoomsByCenter(payload)),
	getBestClassRoomsByTeacher: payload => dispatch(getBestClassRoomsByTeacher(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MostSelectedCourses);