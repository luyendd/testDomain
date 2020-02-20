import React from 'react';
import { FaMapMarkerAlt, FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';
import ImageComp from 'components/ImageComp/ImageComp';
import { formatNumber } from 'ultis/commom';
import { renderStarts } from 'ultis/display';
import './CourseContentItem.scss';

class CourseContentItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const data = this.props.data;

		return (
			<div className="row most-selected-item">
				<div className="col-3">
					<ImageComp local={false} src={data.image_course.path} />
				</div>
				<div className="col-6 most-selected-detail">
					<div className="course-name">
						<span className="name">{data.name}</span>
					</div>
					<div>
						<span className="teacher-name">{data.teacher.name}</span>
					</div>
					<div className="location-item">
						<FaMapMarkerAlt className="map-icon" />
						<span className="location">{data.address}</span>
					</div>
					<div>
						<FaUsers className="users-icon" />
						<span>{this.props.current_student} / {this.props.total_student}</span>
					</div>
					<div>
						<FaRegMoneyBillAlt className="money-icon" />
						<span>{formatNumber(this.props.data.course.fees * (1 - this.props.data.course.sale / 100))}</span>
					</div>
				</div>
				<div className="col-3 most-selected-item-rate">
					<h6>{data.count_rate}</h6>
					<span className="rate">Đánh giá</span>
					<div className="course-item-detail-vote">
						{renderStarts(data.avg_rate / 2)}
					</div>
				</div>
			</div>
		)
	}
}

export default CourseContentItem;