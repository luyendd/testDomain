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
					<div>
						<p>Thời gian học </p>
						<p>- Số buổi học: Học viên học 2 buổi với Giáo Viên và 1 buổi gia sư cùng Trợ Giảng</p>
						<p>- Thời lượng khoá học: 90 phút</p>
						<p>- Khoá học được tiến hành vào buổi tối. Học viên có thể lựa chọn một trong 2 ca học chính bao gồm:</p>
						<p>+ Ca 1: Bắt đầu từ 18h đến 19h30</p>
						<p>+ Ca 2: Bắt đầu từ 19h30 đến 21h</p>
						<p>- Phân loại năng lực: Học viên được đánh giá (test) năng lực đầu vào bởi chuyên viên kiểm tra chất lượng, đảm bảo cho việc học viên tham gia học đúng lớp để đạt được kết quả cao nhất. Trường hợp các học viên chưa đạt năng lực đầu vào khoá học, Edutalk tổ chức các lớp học bổ trợ - cung cấp các kiến thức nền tảng cho học viên để tham gia các khoá học về sau đạt kết quả như mong muốn.</p>
						{this.state.expand === true && (
							<p>- Giảng viên: Giảng viên khoá học giao tiếp cơ bản là những giảng viên có hơn 2 năm kinh nghiệm giảng dạy với trình độ tiếng Anh tốt (IELTS đạt từ 7.0 / TOEIC đạt từ 850). Các Giảng viên của Edutalk là những thầy cô trẻ trung, đầy năng lượng luôn mang đến cho lớp học một bầu không khí vui tươi và năng lượng. Các Giảng viên là các Thầy Cô yêu nghề luôn luôn thấu hiễu và giúp đỡ học viên trong quá trình dạy học.</p>
						)}
					</div>

					<button className="more-btn" onClick={this.onClickMore}>{this.state.expand === false ? 'Xem thêm' : 'Thu gọn'}</button>
				</div>
			</div>
		)
	}
}

export default CourseInformationDetail;