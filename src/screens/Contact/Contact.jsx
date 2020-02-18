import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { connect } from 'react-redux';
import Banner from 'components/Banner/Banner';
import Map from 'components/Map/Map';
import { isInValidEmail, isEmpty } from 'ultis/commom';
import { sendMessage } from './redux';
import './Contact.scss';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			nameError: null,
			phoneNumber: '',
			phoneError: null,
			email: '',
			emailError: null,
			message: '',
			messageError: null,
		};
	}

	onChangeName = (event) => {
		this.setState({
			name: event.target.value,
			nameError: null,
		});
	}

	onChangePhone = (event) => {
		this.setState({
			phoneNumber: event.target.value,
			phoneError: null
		});
	}

	onChangeEmail = (event) => {
		this.setState({
			email: event.target.value,
			emailError: null
		});
	}

	onChangeMessage = (event) => {
		this.setState({
			message: event.target.value,
			messageError: null
		});
	}

	validateInput = () => {
		let nameError = null;
		let phoneError = null;
		let emailError = null;
		let messageError = null;

		if (isEmpty(this.state.name) === true) {
			nameError = '*Vui lòng nhập tên';
		} else {
			nameError = null;
		}

		if (isEmpty(this.state.phoneNumber) === true) {
			phoneError = '*Vui lòng nhập số điện thoại';
		} else {
			phoneError = null;
		}

		if (isEmpty(this.state.email) === true) {
			emailError = '*Vui lòng nhập email';
		} else if (isInValidEmail(this.state.email) === true) {
			emailError = '*Bạn điền sai email. Vui lòng nhập lại email';
		} else {
			emailError = null;
		}

		if (isEmpty(this.state.message) === true) {
			messageError = '*Vui lòng nhập tin nhắn';
		} else {
			messageError = null;
		}

		this.setState({
			nameError,
			phoneError,
			emailError,
			messageError,
		});
	}

	submit = () => {
		this.validateInput();

		if (this.state.nameError == null && this.state.phoneError == null && this.state.emailError == null && this.state.messageError == null) {
			//submit form here
			const params = {
				url: 'v3/contact/send',
				data: {
					name: this.state.name,
					phone: this.state.phoneNumber,
					email: this.state.email,
					message: this.state.message,
				},
			};
			this.props.sendMessage(params);
		}
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="contact-map"><Map location={{ lng: 1 }} /></div>
				<div className="container">
					<div className="row contact-content">
						<div className="col-6">
							<div className="info">
								<h3>Edutalk</h3>
								<h6>Nền tảng kết nối trực tiếp từ giảng viên tới Học Viên</h6>
								<p>Viết cho chúng tôi thông tin thông qua biểu mẫu bên, hoặc gửi thư trực tiếp cho chúng tôi
									theo
                            địa chỉ <u><b>chamsockhachhang@edutalk.edu.vn</b></u></p>
								<div className="info-item">
									<FaMapMarkerAlt className="info-icon" />
									<span>Số 10C9/261 Trần Quốc Hoàn, Cầu Giấy Hà Nội</span>
								</div>
								<div className="info-item">
									<FaMapMarkerAlt className="info-icon" />
									<span>Đây là địa chỉ ở TP Hồ Chí Minh</span>
								</div>
								<div className="info-item">
									<MdPhone className="info-icon" />
									<i className="fa fa-phone" aria-hidden="true"></i>
									<span>Hotline: <span className="hot-line"><u>19004788</u></span></span>
								</div>
								<div className="info-item">
									<FaRegClock className="info-icon" />
									<span>Tất cả các ngày ( cả thứ 7 và chủ nhật )</span>
								</div>
							</div>
						</div>
						<div className="col-6 contact-content-right">
							<h4>Hãy liên hệ để được tư vấn !</h4>
							<div className="contact-form">
								<div className="row form-item">
									<div className="col-6">
										<span className="error">{this.state.nameError}</span>
										<input type="text" id="name" name="name" onChange={this.onChangeName} required />
										<label htmlFor="name" className="required">Họ tên ( <span>*</span> )</label>
									</div>
									<div className="col-6">
										<span className="error">{this.state.phoneError}</span>
										<input type="text" id="phoneNumber" name="phoneNumber" onChange={this.onChangePhone} required />
										<label htmlFor="phoneNumber" className="required">Số điện thoại ( <span>*</span> )</label>
									</div>
								</div>

								<div className="row form-item">
									<div className="col-12">
										<span className="error">{this.state.emailError}</span>
										<input type="text" id="email" name="email" onChange={this.onChangeEmail} required />
										<label htmlFor="email" className="required">Email ( <span>*</span> )</label>
									</div>
								</div>

								<div className="row form-item">
									<div className="col-12">
										<span className="error-message">{this.state.messageError}</span>
										<textarea type="text" id="message" name="message" className="message" onChange={this.onChangeMessage} required></textarea>
										<label htmlFor="message" className="required">Tin nhắn của bạn ( <span>*</span> )</label>
									</div>
								</div>

								<div className="row">
									<div className="col-12">
										<input type="submit" className="form-submit-btn btn" value="Gửi thư" onClick={this.submit} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	sendMessage: payload => dispatch(sendMessage(payload))
});

export default (
	connect(
		null,
		mapDispatchToProps,
	)(Contact)
);