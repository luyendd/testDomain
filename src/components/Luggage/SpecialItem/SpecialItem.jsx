import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
import './SpecialItem.scss';

class SpecialItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className={`${this.props.newType != null ? 'col-6' : 'col-4'} sp-ex-item`}>
				<ImageComp local={false} src={this.props.img} rounded={true} />
				{this.props.newType != null && (
					<div className="new-type">
						<div className="new-type-detail" style={this.props.type === 1 ? { backgroundColor: '#0091ea' } : { backgroundColor: '#4d658b' }}>{this.props.newType}</div>
					</div>
				)}

				<div className="sp-ex-description sp-ex-item-description rounded-bottom">
					<span>{this.props.data.title}</span>
				</div>
			</div >
		)
	}
}

export default SpecialItem;