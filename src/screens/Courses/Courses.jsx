import React from 'react';
import Banner from 'components/Banner/Banner';
import EduType from 'components/EduType/EduType';
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import './Courses.scss';
import EduTeachers from 'components/EduTeachers/EduTeachers';
import EduCenters from 'components/EduCenters/EduCenters';
import EduCoach from 'components/EduCoach/EduCoach';

const sortList = [
	{
		title: 'Học nhiều nhất',
		type: '',
	},
	{
		title: 'Đánh giá cao nhất',
		type: '',
	},
	{
		title: 'Mới nhất',
		type: '',
	},
	{
		title: 'Giá thấp đến cao',
		type: '',
	},
	{
		title: 'Giá cao đến thấp',
		type: '',
	},
];

class Courses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			orderUp: true,
			sortType: '',
		};
	}

	changeOrdering = () => {
		this.setState({
			orderUp: !this.state.orderUp,
		});
	}

	changeSort = (item) => {
		//do smt here
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="container courses-container">
					<EduType />

					<div className="row quick-filter">
						<div className="quick-filter-bar">
							<div className="sort-btn btn" onClick={this.changeOrdering}>
								{this.state.orderUp === true ? (<FaSortAmountUp className={'sort-icon'} />) : (<FaSortAmountDown className={'sort-icon'} />)}
								Sắp xếp
                   			</div>
							<div className="sort-list">
								{sortList.map((item, index) => {
									return (
										<div className={'btn'} key={index} onClick={() => this.changeSort(item)}>{item.title}</div>
									);
								})}
							</div>
						</div>
					</div>

					<EduTeachers />
					<EduCenters />
					<EduCoach />
				</div>
			</div>
		)
	}
}

export default Courses;