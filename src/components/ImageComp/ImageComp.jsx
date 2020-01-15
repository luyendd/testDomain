import React from 'react';
import './ImageComp.scss';

class ImageComp extends React.Component {
	static defaultProps = {
		styleName: '',
		alt: '',
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className={`image-container ${this.props.styleName ? this.props.styleName : ''}`}>
				<img src={this.props.src} alt={this.props.alt} {...this.props.rounded === true && {className: 'rounded'}}/>
			</div>
		)
	}
}

export default ImageComp;