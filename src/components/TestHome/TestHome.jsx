import React from 'react';
import './TestHome.scss';

class TestHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="edu-test" style={{
				background: `linear-gradient(to bottom, rgba(36, 161, 237, 0.88), rgba(77, 101, 139, 0.88)),
				url(./assets/images/edu-test.png)`}}>
				<h2>Bạn muốn kiểm tra kỹ năng tiếng Anh online ngay bây giờ?</h2>
				<p>Đánh giá toàn diện về trình độ hiện tại của bạn</p>
				<button className="test-btn">Làm bài TEST ngay!</button>
			</div>
		)
	}
}

export default TestHome;