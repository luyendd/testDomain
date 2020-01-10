import React from 'react';
import { FaSlidersH, FaMapMarkerAlt } from 'react-icons/fa';
import './Banner.scss';

class Banner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className={this.props.route === 'Home' ? "banner-home" : "banner-sub"}>
				<div className="container">
					<div className="banner-btn">
						<button type="button" className="btn button-filter">
							<FaSlidersH className="filter-icon" />
							Bộ lọc
                    </button>
					</div>
					<div className="banner-content-home">
						<h4>Nền tảng kết nối trực tiếp từ giảng viên tới Học Viên</h4>
						<div className="banner-search">
							<div className="bs-text">
								<input type="text" className="bs-border text-search"
									placeholder="Tìm kiếm khóa học, giảng viên..." />
							</div>
							<div className="bs-select">
								<button className="btn banner-btn-dropdown dropdown-toggle bs-border" type="button"
									data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<FaMapMarkerAlt className="dropdown-icon" />
									<span className="dropdown-text">Địa Điểm</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#">Hoàn Kiếm</a>
									<a className="dropdown-item" href="#">Hai Bà Trưng</a>
									<a className="dropdown-item" href="#">Đống Đa</a>
								</div>
							</div>
							<div className="bs-search">
								<button className="btn bs-btn bs-border search-btn">Tìm kiếm</button>
							</div>
						</div>
						{this.props.route === 'Home' ? (
							<div className="banner-tag">
								<ul className="bt-list">
									<li>#khoahocgiaotiep</li>
									<li>#khoahocphatam</li>
									<li>#IELTS</li>
									<li>#TOEIC</li>
									<li>#trungtam</li>
								</ul>
							</div>
						) : (
								<div class="banner-route">
									Trang chủ / Giới thiệu
                    			</div>
							)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Banner;