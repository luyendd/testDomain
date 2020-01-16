import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
import './TeachingType.scss';

const teachTypes = [
	{
		img: {
			src: './assets/images/edu-cnter.png',
			alt: 'Edutalk Center',
		},
		title: 'Edutalk Center',
		detail: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been',
	},
	{
		img: {
			src: './assets/images/edu-cnter.png',
			alt: 'Edutalk Teachers',
		},
		title: 'Edutalk Teachers',
		detail: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been',
	},
	{
		img: {
			src: './assets/images/edu-cnter.png',
			alt: 'Edutalk Coach',
		},
		title: 'Edutalk Coach',
		detail: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been',
	},
];

class TeachingType extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="row teaching-type">
					{teachTypes.map((item, index) => {
						return (
							<div key={index} className="teaching-type-item col-4">
								<ImageComp styleName={'teaching-type-image'} src={item.img.src} alt={item.img.alt} />
								<h5 className="teaching-type-header">{item.title}</h5>
								<span className="teaching-type-text">{item.detail}</span>
							</div>
						);
					})}
				</div>
			</div>
		)
	}
}

export default TeachingType;