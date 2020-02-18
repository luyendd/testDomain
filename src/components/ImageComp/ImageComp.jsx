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
			<div className={`image-container ${this.props.styleName ? this.props.styleName : ''} ${this.props.rounded === true ? 'rounded' : ''}`}>
				<img src={this.props.local === false ? this.props.src : `${process.env.PUBLIC_URL}/${this.props.src}`} alt={this.props.alt} {...this.props.rounded === true && { className: 'rounded' }} width={'100%'} />
			</div>
		)
	}
}

export default ImageComp;