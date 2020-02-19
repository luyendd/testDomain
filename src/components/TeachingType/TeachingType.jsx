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
		detail: 'Hệ thống trung tâm tiếng Anh uy tín',
	},
	{
		img: {
			src: './assets/images/edu-cnter.png',
			alt: 'Edutalk Teachers',
		},
		title: 'Edutalk Teachers',
		detail: 'Hệ thống giảng viên tiếng Anh chất lượng',
	},
	{
		img: {
			src: './assets/images/edu-cnter.png',
			alt: 'Edutalk Coach',
		},
		title: 'Edutalk Coach',
		detail: 'Hệ thống gia sư chất lượng',
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