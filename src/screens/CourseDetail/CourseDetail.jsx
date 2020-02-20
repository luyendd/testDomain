import React from 'react';
import { withRouter } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import TopBarDetail from 'components/TopBarDetail/TopBarDetail';
import CourseInformationDetail from 'components/CourseInformationDetail/CourseInformationDetail';
import TeacherIntroduction from 'components/TeacherIntroduction/TeacherIntroduction';
import RegisterCourseDetail from 'components/RegisterCourseDetail/RegisterCourseDetail';
import BasicQuestion from 'components/BasicQuestion/BasicQuestion';
import RatingNComment from 'components/RatingNComment/RatingNComment';
import { getCourseDetail } from './redux';
import { connect } from 'react-redux';
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
	}

	componentDidMount() {
		const payload = {
			url: `v3/courses/${this.props.match.params.slug}?lop=${this.props.match.params.classId}`,
		};
		this.props.getCourseDetail(payload);
	}

	onChangeTopBar = (index) => {
		this.setState({
			activeTopBar: index,
		});
	}

	render() {
		const data = this.props.courseDetail.data;

		if (data == null) {
			return null;
		}
		console.log(data);

		return (
			<div>
				<Banner />
				<div className="container course-detail-container">
					<div className="row basic-information">
						<div className="col-8">
							<h4 className="course-title">{data.course.name}</h4>
							<TopBarDetail data={topBars} activeBar={this.state.activeTopBar} onChangeTopBar={this.onChangeTopBar} />
							<CourseInformationDetail data={data.course.advantages} />

							<div className="course-information course-content border">
								<div className="description">
									<h6 className="course-title">Nội dung bài giảng</h6>
									<div dangerouslySetInnerHTML={{ __html: data.course.description }} />
								</div>
							</div>

							<TeacherIntroduction data={data.teacher} type={'course'} />
						</div>
						<div className="col-4 register">
							<div className="sticky-top form-border">
								<RegisterCourseDetail data={data} />
							</div>
						</div>
					</div>

					<BasicQuestion />

					<RatingNComment />

				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	courseDetail: state.CourseDetail,
});

const mapDispatchToProps = dispatch => ({
	getCourseDetail: payload => dispatch(getCourseDetail(payload))
});

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(withRouter(CourseDetail))
);