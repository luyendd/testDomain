import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa';
import ImageComp from 'components/ImageComp/ImageComp';
import './CourseItem.scss';

class CourseItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="col-3">
				<div className="course-item">
					<div className="course-item-content">
						<div className="course-item-image">
							<img className="course-image" src={this.props.courseImg} alt="" />
							<div className="course-img-teacher">
								<div className="teacher-avatar">
									<img src={this.props.teacherImg} alt="" />
								</div>
								<span className="teacher-name">{this.props.teacherName}</span>
							</div>
						</div>
						<div className="course-item-detail">
							<div className="course-item-detail-title">
								<span>{this.props.title}</span>
							</div>
							<div className="course-item-detail-price">
								<span className="price">{this.props.salePrice}</span>
								<span>{this.props.price}</span>
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
								<span className="location">{this.props.location}</span>
							</div>
							<div className="course-item-detail-bottom">
								<div className="course-item-detail-empty-slot">
									<FaUsers className="users-icon" />
									<span>{this.props.emptySlot} / {this.props.totalSlot}</span>
								</div>
								<Link to="/">Đăng ký ngay</Link>
							</div>
						</div>
					</div>
					<div className="course-item-hover">
						<div>
							<p>Khai giảng: {this.props.openingDate}</p>
						</div>
						<div className="course-item-detail-title">
							<span>{this.props.title}</span>
						</div>
						<div className="course-item-detail-price">
							<span className="price">{this.props.salePrice}</span>
							<span>{this.props.price}</span>
						</div>
						<div className="course-item-detail-location">
							<i className="fa fa-map-marker map-icon" aria-hidden="true"></i>
							<span className="location">{this.props.location}</span>
						</div>
						<div className="course-item-hover-img">
							<ImageComp src={'./assets/images/teacher.png'} />
							<span className="hover-teacher-name">Giảng viên: {this.props.teacherName}</span>
						</div>
						<div>
							<span className="course-item-hover-description">{this.props.description}</span>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default CourseItem;