import React from 'react';
import { FaSlidersH, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AdvancedFilter from 'components/AdvancedFilter/AdvancedFilter';
import './Banner.scss';

class Banner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleFilter: this.props.toggle ? this.props.toggle : false,
		};
	}

	toggleFunc = () => {
		this.setState({
			toggleFilter: !this.state.toggleFilter,
		});
	}

	render() {
		return (
			<div className={this.props.route === 'Home' ? "banner-home" : "banner-sub"}>
				<div className="container">
					<div className="banner-btn">
						<button type="button" className="btn button-filter" onClick={this.toggleFunc}>
							<FaSlidersH className="filter-icon" />
							Bộ lọc
                    	</button>
					</div>
					<div className="banner-content-home">
						{this.props.route === 'Home' && (
							<h4>Nền tảng kết nối trực tiếp từ giảng viên tới Học Viên</h4>
						)}

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
									<Link className="dropdown-item" to="/" >Hoàn Kiếm</Link>
									<Link className="dropdown-item" to="/" >Đống Đa</Link>
									<Link className="dropdown-item" to="/" >Hai Bà Trưng</Link>
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
								<div className="banner-route">
									Trang chủ / Giới thiệu
                    			</div>
							)
						}
					</div>
				</div>
				<AdvancedFilter toggle={this.state.toggleFilter} toggleFunc={this.toggleFunc} />
			</div>
		)
	}
}

export default Banner;