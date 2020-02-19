import React from 'react';
import './ExperienceItem.scss';
import { Link } from 'react-router-dom';

class ExperienceItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Link to={`/new/${this.props.data.slug}`} className="col-3 st-ex-item">
				<img src={this.props.data.featured_image.path_string} className="rounded" height="100%" width="100%"
					alt="" />
				<div className="sp-ex-description st-ex-item-description"><span className="text">{this.props.data.title}</span></div>
			</Link>
		)
	}
}

export default ExperienceItem;