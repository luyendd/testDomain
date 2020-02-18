import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
import { FaRegCalendar, FaUsers, FaRegClock } from 'react-icons/fa';
import { TiPinOutline } from 'react-icons/ti';
import './RegisterCourseDetail.scss';
import { formatNumber } from 'ultis/commom';

class RegisterCourseDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { course } = this.props.data;

		return (
			<>
				<div className="register-img">
					<ImageComp local={false} src={course.image.path} />
				</div>
				<div className="register-form">
					<div className="register-form-header-item">
						<div className="ed-ct-dt-price">
							<span>{formatNumber(this.props.data.course.fees * (1 - this.props.data.course.sale / 100))}</span>
							<span>{formatNumber(this.props.data.course.fees)}</span>
						</div>
						<TiPinOutline className={'big-icon'} />
					</div>
					<div className="register-form-header-item slot">Còn {this.props.data.total_student - this.props.data.current_student} suất</div>
					<div className="register-form-header-item">
						<button className="register-trial-study-btn">Đăng ký học thử</button>
						<button className="register-study-btn">Đăng ký học</button>
					</div>
					<div className="register-form-body">
						<div className="register-form-body-item">
							<FaRegCalendar className={'icon'} />
							<span>{course.name}</span>
						</div>
						<div className="register-form-body-item">
							<ImageComp src={'assets/images/icons/three-tier-pyramid.png'} styleName={'custom-icon'} />
							<span>{course.times}</span>
						</div>
						<div className="register-form-body-item">
							<FaUsers className={'icon'} />
							<span>Học Viên: {this.props.data.total_student} người / lớp</span>
						</div>
						<div className="register-form-body-item">
							<FaRegCalendar className={'icon'} />
							<span>Khai Giảng : {this.props.data.start_time}</span>
						</div>
						<div className="register-form-body-item">
							<FaRegClock className={'icon'} />
							<span>Thời gian: {this.props.data.learning_schedule}</span>
						</div>
					</div>
					<div className="register-form-footer">
						<div className="hotline">Hotline: <span>19004788</span></div>
					</div>
				</div>
			</>
		)
	}
}

export default RegisterCourseDetail;