import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa';
import ImageComp from 'components/ImageComp/ImageComp';
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
			return <Redirect to={`/course/${this.props.data.id}`} />
		}

		return (
			<div className="col-3">
				<div className="course-item" onClick={this.goToCourseDetail}>
					<div className="course-item-content">
						<div className="course-item-image">
							<img className="course-image" src={this.props.data.courseImg} alt="" />
							<div className="course-img-teacher">
								<div className="teacher-avatar">
									<img src={this.props.data.teacherImg} alt="" />
								</div>
								<span className="teacher-name">{this.props.data.teacherName}</span>
							</div>
						</div>
						<div className="course-item-detail">
							<div className="course-item-detail-title">
								<span>{this.props.data.title}</span>
							</div>
							<div className="course-item-detail-price">
								<span className="price">{this.props.data.salePrice}</span>
								<span>{this.props.data.price}</span>
							</div>
							<div className="course-item-detail-vote">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
							<div className="course-item-detail-location">
								<FaMapMarkerAlt className="map-icon" />
								<span className="location">{this.props.data.location}</span>
							</div>
							<div className="course-item-detail-bottom">
								<div className="course-item-detail-empty-slot">
									<FaUsers className="users-icon" />
									<span>{this.props.data.emptySlot} / {this.props.data.totalSlot}</span>
								</div>
								<Link to="/">Đăng ký ngay</Link>
							</div>
						</div>
					</div>
					<div className="course-item-hover">
						<div>
							<p>Khai giảng: {this.props.data.openingDate}</p>
						</div>
						<div className="course-item-detail-title">
							<span>{this.props.data.title}</span>
						</div>
						<div className="course-item-detail-price">
							<span className="price">{this.props.data.salePrice}</span>
							<span>{this.props.data.price}</span>
						</div>
						<div className="course-item-detail-location">
							<i className="fa fa-map-marker map-icon" aria-hidden="true"></i>
							<span className="location">{this.props.data.location}</span>
						</div>
						<div className="course-item-hover-img">
							<ImageComp src={'./assets/images/teacher.png'} />
							<span className="hover-teacher-name">Giảng viên: {this.props.data.teacherName}</span>
						</div>
						<div>
							<span className="course-item-hover-description">{this.props.data.description}</span>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default CourseItem;