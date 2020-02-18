import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageComp from 'components/ImageComp/ImageComp';
import { logout } from './redux';
import './Header.scss';

class Header extends React.Component {
	toggleNav = null;

	constructor(props) {
		super(props);

		this.state = {
			toggleType: 0,
		};
	}

	changeToggle = (type) => {
		let toggleType = 0;
		switch (type) {
			case 'messenger':
				toggleType = 1;
				break;
			case 'notification':
				toggleType = 2;
				break;
			case 'user':
				toggleType = 3;
				break;
			default:
				break;
		}

		if (this.state.toggleType === toggleType) {
			this.setState({
				toggleType: 0,
			});
		} else {
			this.changeToggleNavScreen(toggleType);
			this.setState({
				toggleType,
			});
		}
	}

	logout = () => {
		this.props.logout();
	}

	changeToggleNavScreen = (type) => {
		switch (type) {
			case 1:
				this.toggleNav =
					<div className="toggle-messenger">
						<div>
							<div className="messenger-item">
								<div className="avatar">
									<ImageComp src={'assets/images/teacher-avatar.png'} />
									<div className="online"></div>
								</div>
								<div className="content">
									<span className="name">Giảng viên: Nguyễn Thị B</span>
									<span className="messenger">Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên</span>
								</div>
							</div>
							<div className="messenger-item messenger-item-border">
								<div className="avatar">
									<ImageComp src={'assets/images/teacher-avatar.png'} />
									<div className="online"></div>
								</div>
								<div className="content">
									<span className="name">Giảng viên: Nguyễn Thị B</span>
									<span className="messenger">Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên</span>
								</div>
							</div>
						</div>
						<div className="view-all-messenger messenger-item-border">
							<Link to="/messenger">Xem tất cả</Link>
						</div>
					</div>;
				break;
			case 2:
				this.toggleNav =
					<div className="toggle-notification">
						<div className="notification-item" style={{ paddingTop: '15px' }}>
							<div className="content">
								<span className="title">Nhập Q50</span>
								<span className="description">Nhập Q50 giảm ngay 2 triệu với mỗi khoá học combo giao tiếp.</span>
								<span className="time">31/12/2019 - 01:00</span>
							</div>
						</div>
						<div className="notification-item">
							<div className="content">
								<span className="title">Khoá học Giao tiếp căn bản</span>
								<span className="description">Bài tập đã được thêm vào khoá học. Hãy làm bài tập đầy đủ nhé.</span>
								<span className="time">31/12/2019 - 01:00</span>
							</div>
						</div>
					</div>;
				break;
			case 3:
				this.toggleNav =
					<div className="toggle-user">
						<ul className="user-setting">
							<li className="setting-item" onClick={() => this.changeToggle('user')}><Link to="/user-information">Thông tin tài khoản</Link></li>
							<li className="setting-item" onClick={this.logout}>Đăng xuất</li>
						</ul>
					</div>;
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<nav className="container-fluid navbar sticky-top navbar-expand-lg navbar-light">
				<div className="container">
					<Link className="col-1 navbar-brand" to="/">
						<img src={`${process.env.PUBLIC_URL}/assets//images/logo/Logo-edutalk.png`} className="logo-home" alt="" />
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="col-11 collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-list-item">
							<li className={`nav-item ${this.props.location.pathname === '/' ? 'active' : ' '}`}>
								<Link className="nav-link" to="/">Trang chủ</Link>
							</li>
							<li className={`nav-item ${this.props.location.pathname === '/about' ? 'active' : ' '}`}>
								<Link className="nav-link" to="/about">Giới thiệu</Link>
							</li>
							<li className={`nav-item ${this.props.location.pathname === '/courses' ? 'active' : ' '}`}>
								<Link className="nav-link" to="/courses">Khóa học</Link>
							</li>
							<li className={`nav-item ${this.props.location.pathname === '/stakeholders' ? 'active' : ' '}`}>
								<Link className="nav-link" to="/centers">Đối tác</Link>
							</li>
							<li className={`nav-item ${this.props.location.pathname === '/news' ? 'active' : ' '}`}>
								<Link className="nav-link" to="/news">Tin tức</Link>
							</li>
							<li className={`nav-item ${this.props.location.pathname === '/contact' ? 'active' : ' '}`}>
								<Link className="nav-link" to="/contact">Liên hệ</Link>
							</li>
						</ul>
						{this.props.authentication.status !== true ? (
							<div className="nav-list-button my-2 my-lg-0">
								<Link to={{
									pathname: "/login",
									state: {
										signup: false,
										previousPath: this.props.location.pathname
									}
								}}><button className="btn my-2 my-sm-0 nav-btn" type="button">Đăng nhập</button></Link>
								<button className="btn my-2 my-sm-0 nav-btn sign-up-btn" type="button">Đăng ký</button>
							</div>
						) : (
								<div className="nav-list-button icons">
									<div className="messenger-icon" onClick={() => this.changeToggle('messenger')}>
										<ImageComp src={`assets/images/icons/messenger.png`} />
									</div>
									<div className="notification-icon" onClick={() => this.changeToggle('notification')}>
										<ImageComp src={`assets/images/icons/on-notification.png`} />
									</div>
									<div className="avatar" onClick={() => this.changeToggle('user')}>
										{this.props.userInfo && this.props.userInfo.user && this.props.userInfo.user.profile.avatar.thumbnails[0] && <ImageComp local={false} src={this.props.userInfo.user.profile.avatar.thumbnails[0].path} />}
										<div className="online"></div>
									</div>

									{this.state.toggleType !== 0 && (
										<div className="toggle-nav" >
											{this.toggleNav}
										</div>
									)}
								</div>
							)}
					</div>
				</div>
			</nav>

		)
	}
}

const mapStateToProps = state => ({
	authentication: state.Authentication,
	userInfo: state.UserInfo,
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
});

export default (
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(withRouter(Header))
);
