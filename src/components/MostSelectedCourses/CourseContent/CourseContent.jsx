import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import './CourseContent.scss';
import CourseContentItem from './CourseContentItem/CourseContentItem';

class CourseContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		if (this.props.data == null) {
			return null;
		}

		const { classrooms } = this.props.data;
		console.log(classrooms.data);

		return (
			<div className="most-seleted-content">
				<div className="most-seleted-title">
					<h6>{this.props.title}</h6>
					<Link className="view-all" to="/">
						<span>Xem tất cả</span>
						<FiChevronsRight className="icon-view-all" />
					</Link>
				</div>
				{classrooms.data.map((item, index) => {
					if (index > 2) {
						return null;
					}
					return (
						<CourseContentItem key={index} data={item} />
					);
				})}
			</div>
		)
	}
}

export default CourseContent;