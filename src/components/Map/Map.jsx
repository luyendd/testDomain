import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { getAllLocation } from './redux';
import './Map.scss';

const Marker = ({ text }) => <div>{text}</div>;

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

	componentDidMount() {
		if (this.props.location != null) {
			const payload = {
				url: `v3/centers/all-location`,
			};
			this.props.getAllLocation(payload);
		}
	}

	renderMarkers = (map, maps) => {
		// use map and maps objects
		// let marker = new maps.Marker({
		// 	position: myLatLng,
		// 	map,
		// 	title: 'Hello World!'
		// });
	};

	render() {
		if (this.props.location == null && (this.props.allLocation == null || this.props.allLocation.data == null)) return null;

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
					onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
				>
					{this.props.allLocation && this.props.allLocation.data.map((item, index) => {
						return (
							<Marker
								key={index}
								lat={item.lat}
								lng={item.lng}
								text={item.address}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	allLocation: state.AllLocation,
});

const mapDispatchToProps = dispatch => ({
	getAllLocation: payload => dispatch(getAllLocation(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);