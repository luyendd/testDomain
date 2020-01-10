import React from 'react';
import Banner from 'components/Banner/Banner';


import './style.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Banner route={'Home'} />
			</div>
		);
	}
}

export default Home;
