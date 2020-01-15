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
		return (
			<div className="most-seleted-content">
				<div className="most-seleted-title">
					<h6>{this.props.title}</h6>
					<Link className="view-all" to="/">
						Xem tất cả
								<FiChevronsRight className="icon-view-all" />
					</Link>
				</div>
				{this.props.data.map((item, index) => {
					return (
						<CourseContentItem key={index} {...item} />
					);
				})}
			</div>
		)
	}
}

export default CourseContent;