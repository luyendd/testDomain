import React from 'react';
import { withRouter } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import TopBarDetail from 'components/TopBarDetail/TopBarDetail';
import CourseInformationDetail from 'components/CourseInformationDetail/CourseInformationDetail';
import TeacherIntroduction from 'components/TeacherIntroduction/TeacherIntroduction';
import RegisterCourseDetail from 'components/RegisterCourseDetail/RegisterCourseDetail';
import BasicQuestion from 'components/BasicQuestion/BasicQuestion';
import RatingNComment from 'components/RatingNComment/RatingNComment';
import './CourseDetail.scss';

const topBars = [
	{
		title: 'Thông tin chung',
		index: 0,
	},
	{
		title: 'Nội dung học',
		index: 1,
	},
	{
		title: 'Giảng viên',
		index: 2,
	},
	{
		title: 'Đánh giá & Bình luận',
		index: 3,
	},
];

class CourseDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTopBar: 0,
		};
		console.log(this.props.match.params.courseId);
	}

	onChangeTopBar = (index) => {
		this.setState({
			activeTopBar: index,
		});
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="container course-detail-container">
					<div className="row basic-information">
						<div className="col-8">
							<h4 className="course-title">Tiếng anh giao tiếp căn bản</h4>
							<TopBarDetail data={topBars} activeBar={this.state.activeTopBar} onChangeTopBar={this.onChangeTopBar} />
							<CourseInformationDetail />

							<div className="course-information course-content border">
								<div className="description">
									<h6 className="course-title">Nội dung bài giảng</h6>
									<div>
										<p>Các nội dung khoá học giao tiếp cơ bản:</p>
										<p>1. Kiến thức phát âm - bảng phiên âm quốc tế IPA </p>
										<p>2. Từ vựng các chủ đề giao tiếp cơ bản hằng ngày (số lượng: 300-500 từ mới)</p>
										<p>3. Ngữ pháp, cấu trúc câu: Tất tần tất ngữ pháp và cấu trúc câu trình độ A2 (khung trình độ châu Âu, Cambridge)</p>
										<p>4. Luyện tập, cải thiện các kỹ năng nói, nghe và phản xạ</p>
									</div>

								</div>
							</div>

							<TeacherIntroduction />
						</div>
						<div className="col-4 register">
							<RegisterCourseDetail />
						</div>
					</div>

					<BasicQuestion />

					<RatingNComment />

				</div>
			</div>
		)
	}
}

export default withRouter(CourseDetail);