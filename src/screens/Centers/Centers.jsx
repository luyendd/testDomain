import React from 'react';
import { connect } from 'react-redux';
import Banner from 'components/Banner/Banner';
import EduType from 'components/EduType/EduType';
import EduCenters from 'components/EduCenters/EduCenters';
import QuickFilterBar from 'components/QuickFilterBar/QuickFilterBar';
import ListData from 'components/ListData/ListData';
import { getNewCenters } from './redux';

class Centers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.getNewCenters();
	}

	changeSort = (item) => {
		//do smt here
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="container">
					<EduType />

					<QuickFilterBar changeSort={this.changeSort} />

					{this.props.newCenters && <ListData
						title={'Top trung tâm của tháng'}
						data={this.props.newCenters.centers_top}
						limit={4} />}

					<EduCenters image={'./assets/images/edu-banner.png'} />

					{this.props.newCenters && <ListData
						title={'Edutalk Center - Trung tâm mới'}
						data={this.props.newCenters.centers_new}
						limit={4} />}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	newCenters: state.NewCenters,
});


const mapDispatchToProps = dispatch => ({
	getNewCenters: payload => dispatch(getNewCenters(payload))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Centers);