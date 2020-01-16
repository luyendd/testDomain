import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const introList = [
	{
		name: 'Về Edutalk',
		link: '/about',
	},
	{
		name: 'Điều khoản',
		link: '/',
	},
	{
		name: 'Quy định viết đánh giá',
		link: '/',
	},
	{
		name: 'Bảo mật',
		link: '/',
	},
	{
		name: 'Liên hệ',
		link: '/contact',
	},
];

const discoverList = [
	{
		name: 'Đánh giá',
		link: '/',
	},
	{
		name: 'Tin tức sự kiện',
		link: '/',
	},
	{
		name: 'Thông tin khoá học',
		link: '/courses',
	},
	{
		name: 'Thông tin giảng viên',
		link: '/teachers',
	},
];

const stakeholderList = [
	{
		name: 'Dành cho trung tâm',
		link: '/',
	},
	{
		name: 'Dành cho giảng viên',
		link: '/',
	},
];

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<footer>
				<div className="footer">
					<div className="container ">
						<div className="row footer-content">
							<div className="col-2">
								<span>Giới thiệu</span>
								<ul className="footer-list">
									{introList.map((item, index) => {
										return (
											<li key={index} className="footer-item"><Link className="footer-link" to={item.link}>{item.name}</Link></li>
										)
									})}
								</ul>
							</div>
							<div className="col-2">
								<span>Khám phá</span>
								<ul className="footer-list">
									{discoverList.map((item, index) => {
										return (
											<li key={index} className="footer-item"><Link className="footer-link" to={item.link}>{item.name}</Link></li>
										)
									})}
								</ul>
							</div>
							<div className="col-2">
								<span>Hợp tác</span>
								<ul className="footer-list">
									{stakeholderList.map((item, index) => {
										return (
											<li key={index} className="footer-item"><Link className="footer-link" to={item.link}>{item.name}</Link></li>
										)
									})}
								</ul>
							</div>
							<div className="col-4 footer-facebook">
								<div className="fb-page"
									data-href="https://www.facebook.com/Edutalk.edu.vn/"
									data-width="340"
									data-hide-cover="false"
									data-show-facepile="true"></div>
							</div>
						</div>
					</div>
					<div className="footer-end">
						<div className="container footer-end-container">
							<div className="row footer-end-content">
								<div className="col-6 footer-end-item">
									<img  src={`${process.env.PUBLIC_URL}/assets//images/logo/Logo-edutalk.png`}  height="42px" width="23px"
										className="logo-home" alt="" />
								</div>
								<div className="col-6 footer-end-item">
									<span className="copy-right">© 2019, Bản quyền thuộc Edutalk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;