import React from 'react';
import { Redirect } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ImageComp from 'components/ImageComp/ImageComp';
import './TeacherIntroduction.scss';

const data = {
	id: 't1',
	name: 'Nguyễn Hoàn P',
	location: 'Lê Thanh Nghị',
	totalCourse: 14,
	totalStudent: 30000,
};

class TeacherIntroduction extends React.Component {
	static defaultProps = {
		data,
	};

	constructor(props) {
		super(props);

		this.state = {
			redirect: false,
			viewMore: false,
		};
	}

	goToTeacherDetail = () => {
		this.setState({
			redirect: true,
		});
	}

	onClickViewBtn = () => {
		this.setState({
			viewMore: !this.state.viewMore,
		});
	}

	render() {
		if (this.state.redirect === true) {
			return (<Redirect to={`/teacher/${this.props.data.id}`} />);
		}

		return (
			<div className="teacher-information border">
				<div className="teacher-information-content">
					<div className="header">
						<h6 className="course-title">Thông tin giảng viên</h6>
						{this.props.type === 'course' && <button className="btn detail-btn" onClick={this.goToTeacherDetail}>Xem chi tiết</button>}
					</div>
					<div className="introduction">
						<div className="teacher-avatar">
							<ImageComp src={'assets/images/teacher-avatar.png'} />
						</div>
						<div className="detail">
							<span className="intro-title">Giảng viên</span>
							<span className="intro-content">{this.props.data.name}</span>
							<div className="course-item-detail-vote">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
						<div className="location">
							<span className="intro-title">Địa điểm</span>
							<span className="intro-content">{this.props.data.location}</span>
						</div>
						<div className="total">
							<div>
								<div>
									<div className="total-number">{this.props.data.totalCourse}</div>
									<div>Khoá học</div>
								</div>
								<div>
									<div className="total-number">{this.props.data.totalStudent}</div>
									<div>Học viên</div>
								</div>
							</div>
						</div>
					</div>

					<div className="story">
						<h6 className="tc-info-story">Tiểu sử</h6>
						<span>- Cử nhân khoa sư phạm tiếng Anh trường đại học Ngoại Ngữ - Đại Học Quốc Gia Hà Nội
                            <br />
							- Tốt nghiệp loại xuất sắc
                            <br />
							- Chứng chỉ C1 Level
                            <br />
							- Chức danh công việc đã và đang đảm nhận
                            <br />
							- Giáo viên công tác tại trường liên cấp Ngôi Sao Hà Nội
                            <br />
							- Giảng viên giao tiếp trung tâm tiếng Anh Edutalk
							{this.props.type === 'teacher' && this.state.viewMore === true && (
								<>
									<br />
									- Giáo viên công tác tại trường liên cấp Ngôi Sao Hà Nội
                            		<br />
									- Giảng viên giao tiếp trung tâm tiếng Anh Edutalk
								</>
							)}
						</span>
					</div>
					{this.props.type === 'teacher' && <button class="more-btn" onClick={this.onClickViewBtn}>
						{this.state.viewMore === false ? 'Xem thêm' : 'Thu gọn'}
					</button>}
				</div>
			</div>
		)
	}
}

export default TeacherIntroduction;