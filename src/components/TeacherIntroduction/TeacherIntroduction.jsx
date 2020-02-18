import React from 'react';
import { Redirect } from 'react-router-dom';
import ImageComp from 'components/ImageComp/ImageComp';
import { renderStarts } from 'ultis/display';
import './TeacherIntroduction.scss';

class TeacherIntroduction extends React.Component {
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
			return (<Redirect push to={`/teacher/${this.props.data.slug}`} />);
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
							<ImageComp local={false} src={this.props.data.image.path} />
						</div>
						<div className="detail">
							<span className="intro-title">Giảng viên</span>
							<span className="intro-content">{this.props.data.name}</span>
							<div className="course-item-detail-vote">
								{renderStarts(4)}
							</div>
						</div>
						<div className="location">
							{this.props.data.address && <><span className="intro-title">Địa điểm</span>
								<span className="intro-content">{this.props.data.address}</span></>}
						</div>
						<div className="total">
							<div>
								<div>
									<div className="total-number">{this.props.data.total_course}</div>
									<div>Khoá học</div>
								</div>
								<div>
									<div className="total-number">{this.props.data.total_student}</div>
									<div>Học viên</div>
								</div>
							</div>
						</div>
					</div>

					<div className="story">
						<h6 className="tc-info-story">Tiểu sử</h6>
						<span>
							{this.props.data.level ? this.props.data.level : <div dangerouslySetInnerHTML={{ __html: this.props.data.description }} />}
							{/* {this.props.type === 'teacher' && this.state.viewMore === true && (
								<>
									{this.props.data.description}
								</>
							)} */}
						</span>
					</div>
					{/* {this.props.type === 'teacher' && <button className="more-btn" onClick={this.onClickViewBtn}>
						{this.state.viewMore === false ? 'Xem thêm' : 'Thu gọn'}
					</button>} */}
				</div>
			</div>
		)
	}
}

export default TeacherIntroduction;