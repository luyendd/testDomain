import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import ImageComp from 'components/ImageComp/ImageComp';
import CourseItem from 'components/CourseItem/CourseItem';
import './EduCoach.scss';

const courses = [
	{
		id: 1,
		teacherImg: './assets/images/teacher.png',
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-item.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
		openingDate: '',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
	},
	{
		id: 2,
		teacherImg: './assets/images/teacher.png',
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-item.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
		openingDate: '',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
	},
	{
		id: 3,
		teacherImg: './assets/images/teacher.png',
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-item.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
		openingDate: '',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
	},
	{
		id: 4,
		teacherImg: './assets/images/teacher.png',
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-item.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
		openingDate: '',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
	},
	{
		id: 5,
		teacherImg: './assets/images/teacher.png',
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-item.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
		openingDate: '',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
	},
	{
		id: 6,
		teacherImg: './assets/images/teacher.png',
		teacherName: 'Trần Văn A',
		courseImg: './assets/images/edu-item.png',
		title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
		salePrice: '9.000.000',
		price: '10.000.000',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		emptySlot: '15',
		totalSlot: '30',
		openingDate: '',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
	},
];

class EduCoach extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="row edu-teacher">
					<div className="edu-title">
						<h3>Edutalk Teacher - Hệ thống gia sư chất lượng</h3>
						<Link className="view-all-link" to="/">
							Xem tất cả
						<FiChevronsRight className="icon-view-all" />
						</Link>
					</div>
					<div className="row course-list">
						{this.props.image != null && (
							<div className="col-6">
								<ImageComp styleName={'rounded'} src={this.props.image} alt={'Edutalk Teacher'} />
							</div>
						)}

						{courses.map((item, index) => {
							return (
								<CourseItem data={item} key={index} />
							)
						})}

					</div>
				</div>
			</div>
		)
	}
}

export default EduCoach;