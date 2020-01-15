import React from 'react';
import './SpecialItem.scss';
import ImageComp from 'components/ImageComp/ImageComp';

class SpecialItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="col-4 sp-ex-item">
				<ImageComp src={this.props.img} rounded={true} />
				<div className="sp-ex-description sp-ex-item-description rounded-bottom">
					<span>{this.props.content}</span>
				</div>
			</div>
		)
	}
}

export default SpecialItem;