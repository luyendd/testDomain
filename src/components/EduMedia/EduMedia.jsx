import React from 'react';
import EduTitle from 'components/EduTitle/EduTitle';
import ImageComp from 'components/ImageComp/ImageComp';
import YoutubeComp from 'components/YoutubeComp/YoutubeComp';
import './EduMedia.scss';

const brandMedias = [
	{ img: './assets/images/vtv3.png', videoId: 'jlv3mhCk11U' },
	{ img: './assets/images/dantri.png' },
	{ img: './assets/images/vtv1.png' },
	{ img: './assets/images/vtv6.png' },
];

class EduMedia extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeBrand: 0,
			videoId: 'jlv3mhCk11U',
		};
	}

	onClickBrand = (item, index) => {
		this.setState({
			activeBrand: index,
			videoId: item.videoId,
		});
	};

	render() {
		return (
			<div className="container edu-media">
				<EduTitle title={'Truyền thông nói gì về Edutalk'} />

				<div className="row edu-media-video">
					{brandMedias.map((item, index) => {
						return (
							<div key={index} onClick={() => this.onClickBrand(item, index)} className="col-3 media-brand btn">
								<ImageComp src={item.img} />
							</div>
						);
					})}

					<div className="edu-video-television">
						<YoutubeComp
							videoId={this.state.videoId}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default EduMedia;