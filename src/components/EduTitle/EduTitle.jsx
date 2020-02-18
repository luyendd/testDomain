import React from 'react';
import './EduTitle.scss';

class EduTitle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			this.props.title ? (
				<div className="row title-container">
					<div className="col-12">
						<div className={`image-container title-img`}>
							<img src={`${process.env.PUBLIC_URL}/assets/images/icon-hat.png`} alt="" />
						</div>
						<h2 className="background"><span>{this.props.title}</span></h2>
					</div>
				</div>
			) : null
		)
	}
}

export default EduTitle;