import React from 'react';
import EduTitle from 'components/EduTitle/EduTitle';
import SpecialItem from './SpecialItem/SpecialItem';
import './Luggage.scss';
import ExperienceItem from './ExperienceItem/ExperienceItem';

const specialList = [
	{
		img: 'assets/images/edu-special-experience.png',
		content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
	},
	{
		img: 'assets/images/edu-special-experience.png',
		content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
	},
	{
		img: 'assets/images/edu-special-experience.png',
		content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
	},
];

const experienceList = [
	{
		img: './assets/images/edu-study-experience.png',
		content: 'Giao tiếp',
	},
	{
		img: './assets/images/edu-study-experience.png',
		content: 'TOEIC',
	},
	{
		img: './assets/images/edu-study-experience.png',
		content: 'IETLS',
	},
	{
		img: './assets/images/edu-study-experience.png',
		content: 'Giao tiếp',
	},
];

class Luggage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="luggage-container">
					<EduTitle title={'Edutalk hành trang cho bạn'} />
					<h3 className="luggage-header">Trải nghiệm đặc biệt</h3>
					<div className="row special-experience">
						{specialList.map((item, index) => {
							return (
								<SpecialItem key={index} {...item} />
							);
						})}
					</div>

					<h3 className="luggage-header">Kinh nghiệm học</h3>
					<div className="row study-experience">
						{experienceList.map((item, index) => {
							return (
								<ExperienceItem key={index} {...item} />
							);
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Luggage;