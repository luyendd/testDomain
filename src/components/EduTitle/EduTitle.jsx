import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
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
						<ImageComp styleName={'title-img'} src={'./assets/images/icon-hat.png'} />
						<h2 className="background"><span>{this.props.title}</span></h2>
					</div>
				</div>
			) : null
		)
	}
}

export default EduTitle;