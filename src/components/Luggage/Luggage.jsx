import React from 'react';
import { connect } from 'react-redux';
import EduTitle from 'components/EduTitle/EduTitle';
import SpecialItem from './SpecialItem/SpecialItem';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import { getSpecialNewHome, getExperienceHome } from './redux';
import './Luggage.scss';

class Luggage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.getSpecialNewHome();
		this.props.getExperienceHome();
	}

	render() {
		return (
			<div className="container">
				<div className="luggage-container">
					<EduTitle title={'Edutalk hành trang cho bạn'} />
					{this.props.specialNewHome && <>
						<h3 className="luggage-header">Trải nghiệm đặc biệt</h3>
						<div className="row special-experience">
							{this.props.specialNewHome.posts !== null && this.props.specialNewHome.posts.data.map((item, index) => {
								if (index > 2) {
									return null;
								}
								return (
									<SpecialItem key={index} data={item} img={item.featured_image.path_string} />
								);
							})}
						</div>
					</>}

					{this.props.experienceNewHome && <>
						<h3 className="luggage-header">Kinh nghiệm học</h3>
						<div className="row study-experience">
							{this.props.experienceNewHome.posts !== null && this.props.experienceNewHome.posts.data.map((item, index) => {
								if (index > 3) {
									return null;
								}
								return (
									<ExperienceItem key={index} data={item} />
								);
							})}
						</div>
					</>}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	specialNewHome: state.SpecialNewHome,
	experienceNewHome: state.ExperienceNewHome,
});


const mapDispatchToProps = dispatch => ({
	getSpecialNewHome: payload => dispatch(getSpecialNewHome(payload)),
	getExperienceHome: payload => dispatch(getExperienceHome(payload)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Luggage);