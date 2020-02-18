import React from 'react';
import YouTube from 'react-youtube';

class YoutubeComp extends React.Component {
	static defaultProps = {
		opts: {
			height: '100%',
			width: '100%',
		},
	};
	
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<YouTube
				videoId={this.props.videoId}
				id={this.props.id}
				//https://developers.google.com/youtube/player_parameters#IFrame_Player_API
				opts={this.props.opts}
			/>
		)
	}
}

export default YoutubeComp;