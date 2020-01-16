import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
import { FaRegCalendar, FaUsers, FaRegClock } from 'react-icons/fa';
import { TiPinOutline } from 'react-icons/ti';
import './RegisterCourseDetail.scss';

const data = {
	salePrice: '10.000.000',
	price: '15.000.000',
	emptySlot: 17,
	duration: '4 tháng',
	level: 'Trình độ: Giao tiếp cơ bản',
	totalSlot: 20,
	opening: '11 - 12 - 2019',
	time: '19h30 - 21h',
};

class RegisterCourseDetail extends React.Component {
	static defaultProps = {
		data
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="sticky-top form-border">
				<div className="register-img">
					<ImageComp src={'assets/images/register-form.png'} />
				</div>
				<div className="register-form">
					<div className="register-form-header-item">
						<div className="ed-ct-dt-price">
							<span>{this.props.data.salePrice}</span>
							<span>{this.props.data.price}</span>
						</div>
						<TiPinOutline className={'big-icon'} />
					</div>
					<div className="register-form-header-item slot">Còn {this.props.data.emptySlot} suất</div>
					<div className="register-form-header-item">
						<button className="register-trial-study-btn">Đăng ký học thử</button>
						<button className="register-study-btn">Đăng ký học</button>
					</div>
					<div className="register-form-body">
						<div className="register-form-body-item">
							<FaRegCalendar className={'icon'} />
							<span>{this.props.data.duration}</span>
						</div>
						<div className="register-form-body-item">
							<ImageComp src={'assets/images/icons/three-tier-pyramid.png'} styleName={'custom-icon'} />
							<span>{this.props.data.level}</span>
						</div>
						<div className="register-form-body-item">
							<FaUsers className={'icon'} />
							<span>Học Viên: {this.props.data.totalSlot} người / lớp</span>
						</div>
						<div className="register-form-body-item">
							<FaRegCalendar className={'icon'} />
							<span>Khai Giảng : {this.props.data.opening}</span>
						</div>
						<div className="register-form-body-item">
							<FaRegClock className={'icon'} />
							<span>Thời gian: {this.props.data.time}</span>
						</div>
					</div>
					<div className="register-form-footer">
						<div className="hotline">Hotline: <span>19004788</span></div>
					</div>
				</div>
			</div>
		)
	}
}

export default RegisterCourseDetail;