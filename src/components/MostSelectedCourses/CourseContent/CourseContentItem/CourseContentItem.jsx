import React from 'react';
import { FaMapMarkerAlt, FaStar, FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';
import ImageComp from 'components/ImageComp/ImageComp';
import './CourseContentItem.scss';

class CourseContentItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="row most-selected-item">
				<div className="col-3">
					<ImageComp src={this.props.courseImg} />
				</div>
				<div className="col-6 most-selected-detail">
					<div className="course-name">
						<span>Tên khoá học</span>
					</div>
					<div>
						<span className="teacher-name">{this.props.teacherName}</span>
					</div>
					<div>
						<FaMapMarkerAlt className="map-icon" />
						<span className="location">{this.props.location}</span>
					</div>
					<div>
						<FaUsers className="users-icon" />
						<span>{this.props.emptySlot} / {this.props.totalSlot}</span>
					</div>
					<div>
						<FaRegMoneyBillAlt className="money-icon" />
						<span>{this.props.price}</span>
					</div>
				</div>
				<div className="col-3 most-selected-item-rate">
					<h6>52</h6>
					<span className="rate">Đánh giá</span>
					<div className="course-item-detail-vote">
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
				</div>
			</div>
		)
	}
}

export default CourseContentItem;