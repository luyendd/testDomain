import React from 'react';
import { connect } from 'react-redux';
import Banner from 'components/Banner/Banner';
import EduType from 'components/EduType/EduType';
import QuickFilterBar from 'components/QuickFilterBar/QuickFilterBar';
import ListData from 'components/ListData/ListData';
import EduTeachers from 'components/EduTeachers/EduTeachers';
import { getNewTeachers } from './redux';

class Teachers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	changeSort = (item) => {
		//do smt here
	}

	componentDidMount() {
		this.props.getNewTeachers();
	}

	render() {
		console.log(this.props.newTeachers);

		return (
			<div>
				<Banner />
				<div className="container">
					<EduType />

					<QuickFilterBar changeSort={this.changeSort} />
					{this.props.newTeachers && <ListData
						title={'Top giảng viên của tháng'}
						data={this.props.newTeachers.teachers_top}
						limit={4}
						type={'teacher'} />}

					<EduTeachers title={'GV: Nguyễn Trần Khánh Ly - Khoá Học'} image={'./assets/images/edu-banner.png'} />

					{this.props.newTeachers && <ListData
						title={'Edutalk Teacher - Giảng viên mới'}
						data={this.props.newTeachers.teachers_new}
						limit={4}
						type={'teacher'} />}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	newTeachers: state.NewTeachers,
});


const mapDispatchToProps = dispatch => ({
	getNewTeachers: payload => dispatch(getNewTeachers(payload))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Teachers);