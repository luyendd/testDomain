import React from 'react';
import './EduType.scss';

const eduList = [
	{
		title: 'Edutalk Teacher',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
		price: '500.000',
	},
	{
		title: 'Edutalk Center',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
		price: '500.000',
	},
	{
		title: 'Edutalk Coach',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
		price: '500.000',
	},
];

class EduType extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="row edu-type">
				{eduList.map((item, index) => {
					return (
						<div key={index} className="col-4">
							<div className="edu-type-item">
								<h5>{item.title}</h5>
								<span className="description">{item.description}</span>
								<span className="price">Chỉ từ {item.price} VNĐ</span>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default EduType;