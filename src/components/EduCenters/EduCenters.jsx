import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ImageComp from 'components/ImageComp/ImageComp';
import CourseItem from 'components/CourseItem/CourseItem';
import './EduCenters.scss';

class EduCenters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="row edu-center">
					<div className="edu-title">
						<h3>Edutalk Teacher - Hệ thống trung tâm tiếng Anh uy tín</h3>
						<Link className="view-all-link" to="/">
							Xem tất cả
						<FiChevronsRight className="icon-view-all" />
						</Link>
					</div>
					<div className="row course-list">
						{this.props.image != null && (
							<div className="col-6">
								<ImageComp styleName={'rounded'} src={this.props.image} alt={'Edutalk Center'} />
							</div>
						)}

						{this.props.data && this.props.data.data && this.props.data.data.map((item, index) => {
							if (index > 5) {
								return null;
							}
							
							return (
								<CourseItem data={item} key={index} />
							);
						})}

					</div>
				</div>
			</div>
		)
	}
}

export default EduCenters;