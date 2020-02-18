import React from 'react';
import './TopBarDetail.scss';

class TopBarDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onChangeTopBar = (index) => {
		if (this.props.activeBar !== index) {
			this.props.onChangeTopBar(index);
		}
	}

	render() {
		return (
			<div className="top-bar border">
				{this.props.data.map((item, index) => {
					const isActive = index === this.props.activeBar;
					return (
						<div key={index} className={isActive ? 'active' : ''} onClick={isActive === false ? () => this.onChangeTopBar(index) : null}>{item.title}</div>
					);
				})}
			</div>
		)
	}
}

export default TopBarDetail;