import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import EduTitle from 'components/EduTitle/EduTitle';
import ImageComp from 'components/ImageComp/ImageComp';
import CourseItem from 'components/CourseItem/CourseItem';
import './EduTeachers.scss';

const courses = [
	{
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

class EduTeachers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<EduTitle title={'Chúng ta hãy học cùng nhau'} />
				<div className="row edu-teacher">
					<div className="edu-title">
						<h3>Edutalk Teacher - Kết nối giảng viên uy tín</h3>
						<Link className="view-all-link" to="/">
							Xem tất cả
						<FiChevronsRight className="icon-view-all" />
						</Link>
					</div>
					<div className="row course-list">
						<div className="col-6">
							<ImageComp styleName={'rounded'} src={'./assets/images/edu-banner.png'} alt={'Edutalk Teacher'} />
						</div>

						{courses.map((item, index) => {
							return (
								<CourseItem {...item} key={index} />
							)
						})}

					</div>
				</div>
			</div>
		)
	}
}

export default EduTeachers;