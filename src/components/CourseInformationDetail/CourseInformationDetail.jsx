import React from 'react';
import './CourseInformationDetail.scss';

class CourseInformationDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			expand: false,
		};
	}

	onClickMore = () => {
		this.setState({
			expand: !this.state.expand,
		});
	}

	render() {
		return (
			<div className="course-information border">
				<div className="description">
					<h6 className="course-title">Thông tin khoá học</h6>
					<div dangerouslySetInnerHTML={{ __html: this.props.data }} />

						{/* {this.state.expand === true && (
							<p>- Giảng viên: Giảng viên khoá học giao tiếp cơ bản là những giảng viên có hơn 2 năm kinh nghiệm giảng dạy với trình độ tiếng Anh tốt (IELTS đạt từ 7.0 / TOEIC đạt từ 850). Các Giảng viên của Edutalk là những thầy cô trẻ trung, đầy năng lượng luôn mang đến cho lớp học một bầu không khí vui tươi và năng lượng. Các Giảng viên là các Thầy Cô yêu nghề luôn luôn thấu hiễu và giúp đỡ học viên trong quá trình dạy học.</p>
						)}
					</div>

					<button className="more-btn" onClick={this.onClickMore}>{this.state.expand === false ? 'Xem thêm' : 'Thu gọn'}</button> */}
				</div>
			</div>
		)
	}
}

export default CourseInformationDetail;