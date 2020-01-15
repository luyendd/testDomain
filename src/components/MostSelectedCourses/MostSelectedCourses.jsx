import React from 'react';
import './MostSelectedCourses.scss';
import CourseContent from './CourseContent/CourseContent';

const teacherCourses = [
	{
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-most-seleted-course.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
	},
	{
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-most-seleted-course.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
	},
	{
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-most-seleted-course.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
	},
];

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
							<CourseContent data={teacherCourses} title={'Edutalk Teacher'} />
						</div>
						<div className="col-6">
							<CourseContent data={teacherCourses} title={'Edutalk Center'} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MostSelectedCourses;