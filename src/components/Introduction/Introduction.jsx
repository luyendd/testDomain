import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
import EduTitle from 'components/EduTitle/EduTitle';
import './Introduction.scss';

const introList = [
	{ detail: 'Lorem Ipsum is simply dummy text of the printing.' },
	{ detail: 'Lorem Ipsum is simply dummy text of the printing.' },
	{ detail: 'Lorem Ipsum is simply dummy text of the printing.' },
];

class Introduction extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				{this.props.route === 'Home' && <EduTitle title={'Giới thiệu về Edutalk Edu'} />}
				<div className="row introduction">
					<div className="col-6">
						<ImageComp src={'./assets/images/edu-intro.png'} />
					</div>
					<div className="col-6">
						<div className="intro-content">
							<div className="intro-navigate">
								<p className="intro-navigate-header">01. </p><span className="intro-navigate-detail">Online Edu</span>
							</div>
							<div className="intro-title">
								<h2>Nền tảng kết nối trực tiếp từ giảng viên tới Học Viên</h2>
							</div>
							<div className="intro-description">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
							</div>
							<ul className="intro-list">
								{introList.map((value, index) => {
									return (
										<li key={index}>
											<p>{value.detail}</p>
										</li>
									);
								})}
							</ul>
							<button className="intro-btn">Đăng ký ngay</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Introduction;