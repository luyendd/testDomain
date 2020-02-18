import React from 'react';
import { Link } from 'react-router-dom';
import ImageComp from 'components/ImageComp/ImageComp';
import './EduType.scss';

const eduList = [
	{
		img: './assets//images/edu-cnter.png',
		title: 'Edutalk Teacher',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
		price: '500.000',
		link: '/teachers',
	},
	{
		img: './assets//images/edu-cnter.png',
		title: 'Edutalk Center',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
		price: '500.000',
		link: '/centers',
	},
	{
		img: './assets//images/edu-cnter.png',
		title: 'Edutalk Coach',
		description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
		price: '500.000',
		link: '/coaches',
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
						<Link key={index} className="col-4" to={item.link}>
							<div className="edu-type-item">
								<ImageComp styleName={'background-img rounded'} src={item.img}/>
								<h5>{item.title}</h5>
								<span className="description">{item.description}</span>
								<span className="price">Chỉ từ {item.price} VNĐ</span>
							</div>
						</Link>
					);
				})}
			</div>
		);
	}
}

export default EduType;