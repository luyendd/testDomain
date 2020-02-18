import React from 'react';
import Banner from 'components/Banner/Banner';
import EduType from 'components/EduType/EduType';
import QuickFilterBar from 'components/QuickFilterBar/QuickFilterBar';
import ListData from 'components/ListData/ListData';
import EduTeachers from 'components/EduTeachers/EduTeachers';

const centersMonth = [
	{
		backgroundImg: './assets/images/edu-item.png',
		avatar: './assets/images/teacher.png',
		name: 'Trần Văn A',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		description: ' Đây là đoạn mô tả ngắn về trình độ của giáo viên.Đây là đoạn mô tả ngắn về trình độ của giáo viên.',
	},
	{
		backgroundImg: './assets/images/edu-item.png',
		avatar: './assets/images/teacher.png',
		name: 'Trần Văn A',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		description: ' Đây là đoạn mô tả ngắn về trình độ của giáo viên.Đây là đoạn mô tả ngắn về trình độ của giáo viên.',
	},
	{
		backgroundImg: './assets/images/edu-item.png',
		avatar: './assets/images/teacher.png',
		name: 'Trần Văn A',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		description: ' Đây là đoạn mô tả ngắn về trình độ của giáo viên.Đây là đoạn mô tả ngắn về trình độ của giáo viên.',
	},
	{
		backgroundImg: './assets/images/edu-item.png',
		avatar: './assets/images/teacher.png',
		name: 'Trần Văn A',
		location: 'Định Công, Hoàng Mai, Hà Nội',
		description: ' Đây là đoạn mô tả ngắn về trình độ của giáo viên.Đây là đoạn mô tả ngắn về trình độ của giáo viên.',
	},
];

class Coaches extends React.Component {
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
				<Banner />
				<div className="container">
					<EduType />

					<QuickFilterBar changeSort={this.changeSort} />

					<ListData
						title={'Top gia sư của tháng'}
						data={centersMonth} />

					<EduTeachers title={'Edu Coach - Kết nối gia sư uy tín'} image={'./assets/images/edu-banner.png'} />

				</div>
			</div>
		)
	}
}

export default Coaches;