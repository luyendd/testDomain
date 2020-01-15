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
				<h2>Hãy cùng Edutalk làm bài test về kỹ năng của bạn nhé.</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
				<button className="test-btn">Làm bài test</button>
			</div>
		)
	}
}

export default TestHome;