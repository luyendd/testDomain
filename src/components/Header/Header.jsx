import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<nav className="container-fluid navbar sticky-top navbar-expand-lg navbar-light">
				<div className="container">
					<Link className="col-1 navbar-brand" to="/">
						<img src="./assets//images/logo/Logo-edutalk.png" className="logo-home" alt="" />
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="col-11 collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-list-item">
							<li className="nav-item active">
								<Link className="nav-link" to="/">Trang chủ</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">Giới thiệu</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/courses">Khóa học</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/stakeholders">Đối tác</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/news">Tin tức</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Liên hệ</Link>
							</li>
						</ul>
						<div className="nav-list-button my-2 my-lg-0">
							<button className="btn my-2 my-sm-0 nav-btn" type="button">Đăng nhập</button>
							<button className="btn my-2 my-sm-0 nav-btn sign-up-btn" type="button">Đăng ký</button>
						</div>
					</div>
				</div>
			</nav>

		)
	}
}

export default Header;