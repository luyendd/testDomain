import React from 'react';
import { FaStar } from 'react-icons/fa';
import ImageComp from 'components/ImageComp/ImageComp';
import './TeacherIntroduction.scss';

class TeacherIntroduction extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="teacher-information border">
				<div className="teacher-information-content">
					<div className="header">
						<h6 className="course-title">Thông tin giảng viên</h6>
						<button className="btn detail-btn" >Xem chi tiết</button>
					</div>
					<div className="introduction">
						<div className="teacher-avatar">
							<ImageComp src={'assets/images/teacher-avatar.png'} />
						</div>
						<div className="detail">
							<span className="intro-title">Giảng viên</span>
							<span className="intro-content">Nguyễn Hoàn P</span>
							<div className="course-item-detail-vote">
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar/>
							</div>
						</div>
						<div className="location">
							<span className="intro-title">Địa điểm</span>
							<span className="intro-content">Lê Thanh Nghị</span>
						</div>
						<div className="total">
							<div>
								<div>
									<div className="total-number">14</div>
									<div>Khoá học</div>
								</div>
								<div>
									<div className="total-number">300000</div>
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
							- Giảng viên giao tiếp trung tâm tiếng Anh Edutalk</span>
					</div>
				</div>
			</div>

		)
	}
}

export default TeacherIntroduction;