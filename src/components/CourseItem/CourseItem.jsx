import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { formatNumber } from 'ultis/commom';
import { renderStarts } from 'ultis/display';
import './CourseItem.scss';

class CourseItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			redirect: false,
		};
	}

	goToCourseDetail = () => {
		this.setState({
			redirect: true,
		})
	}

	render() {
		if (this.state.redirect === true) {
			return <Redirect push to={`/course/${this.props.data.course.slug}/${this.props.data.id}`} />
		}

		if (this.props.data == null || this.props.data.image_course == null || this.props.data.teacher == null) {
			return null;
		}

		return (
			<div className={`${this.props.className ? this.props.className : 'col-3'}`}>
				<div className="course-item" onClick={this.goToCourseDetail}>
					<div className="course-item-content">
						<div className="course-item-image">
							<img className="course-image" src={this.props.data.image_course.path} alt="" />
							<div className="course-img-teacher">
								<div className="teacher-avatar">
									<img src={this.props.data.image_teacher.path} alt="" />
								</div>
								<span className="teacher-name">{this.props.data.teacher.name}</span>
							</div>
						</div>
						<div className="course-item-detail">
							<div className="course-item-detail-title">
								<span>{this.props.data.course.name}</span>
							</div>
							<div className="course-item-detail-price">
								<span className="price">{formatNumber(this.props.data.course.fees * (1 - this.props.data.course.sale / 100))}</span>
								<span>{formatNumber(this.props.data.course.fees)}</span>
							</div>
							<div className="course-item-detail-vote">
								{renderStarts(this.props.data.avg_rate / 2)}
							</div>
							<div className="course-item-detail-location">
								<FaMapMarkerAlt className="map-icon" />
								<span className="location">{this.props.data.address}</span>
							</div>
							<div className="course-item-detail-bottom">
								<div className="course-item-detail-empty-slot">
									<FaUsers className="users-icon" />
									<span>{this.props.data.current_student} / {this.props.data.total_student}</span>
								</div>
								<Link to="/">Đăng ký ngay</Link>
							</div>
						</div>
					</div>
					<div className="course-item-hover">
						<div>
							<p>Khai giảng: {this.props.data.start_time}</p>
						</div>
						<div className="course-item-detail-title">
							<span>{this.props.data.course.name}</span>
						</div>
						<div className="course-item-detail-price">
							<span className="price">{formatNumber(this.props.data.course.fees * (1 - this.props.data.course.sale / 100))}</span>
							<span>{formatNumber(this.props.data.course.fees)}</span>
						</div>
						<div className="course-item-detail-location">
							<FaMapMarkerAlt className="map-icon" />
							<span className="location">{this.props.data.address}</span>
						</div>
						<div className="course-item-hover-img">
							<div className="teacher-hover-avatar">
								<img src={this.props.data.image_teacher.path} alt="" />
							</div>
							<span className="hover-teacher-name">Giảng viên: {this.props.data.teacher.name}</span>
						</div>
						<div>
							<span className="course-item-hover-description">{this.props.data.course.excerpt}</span>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default CourseItem;