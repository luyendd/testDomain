import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
	static defaultProps = {
		center: {
			lat: 21.02,
			lng: 105.83
		},
		zoom: 13
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	handleApiLoaded = (map, maps) => {
		// use map and maps objects
	};

	render() {
		return (
			<div style={{ height: '100%', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyAwrZZBizFVu81oO8oru44BRlCU5a_N4Zw',
						language: 'vi',
						region: 'vi',
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
				>
					<AnyReactComponent
						// lat={59.955413}
						// lng={30.337844}
						// text="My Marker"
					/>
				</GoogleMapReact>
			</div>
		)
	}
}

export default Map;