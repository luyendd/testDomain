import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import EduTitle from 'components/EduTitle/EduTitle';
import ImageComp from 'components/ImageComp/ImageComp';
import CourseItem from 'components/CourseItem/CourseItem';
import './EduTeachers.scss';

class EduTeachers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		if (this.props.data == null) {
			return null;
		}
		
		const { classrooms } = this.props.data;
		return (
			<div className="container">
				{this.props.route === 'Home' && <EduTitle title={'Lựa chọn khoá học phù hợp'} />}
				<div className="row edu-teacher">
					<div className="edu-title">
						<h3>Edutalk Teacher - Hệ thống giảng viên tiếng Anh chất lượng</h3>
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

						{classrooms && classrooms.data && classrooms.data.map((item, index) => {
							if (index > 5) {
								return null;
							}

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

export default EduTeachers;