import React from 'react';
import './ExperienceItem.scss';

class ExperienceItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="col-3 st-ex-item">
				<img src={this.props.img} className="rounded" height="100%" width="100%"
					alt="" />
				<div className="sp-ex-description st-ex-item-description"><span>{this.props.content}</span></div>
			</div>
		)
	}
}

export default ExperienceItem;