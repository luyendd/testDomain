import React from 'react';
import Banner from 'components/Banner/Banner';
import Introduction from 'components/Introduction/Introduction';
import YoutubeComp from 'components/YoutubeComp/YoutubeComp';
import Map from 'components/Map/Map';
import './About.scss';

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="container about-container">
					<Introduction />
					<div className="row about-item">
						<div className="col-5">
							<div className="left-description">
								<div className="about-header">
									<h2>Thành Lập</h2>
									<div className="about-border">
										<div className="special-border"></div>
										<div className="normal-border"></div>
									</div>
								</div>
								<span className="about-item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
									been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book. It has survived not only five
									centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software like Aldus PageMaker including
									versions of Lorem Ipsum.
                        </span>
							</div>
						</div>
						<div className="col-7 right-img">
							<div className="image-container">
								<img src="./assets/images/about-establish.png" alt="" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12 image-container slogan">
							<img src="assets/images/edu-slogan.png" alt="" />
						</div>
					</div>

					<div className="row about-item">
						<div className="col-7 left-img">
							<div className="image-container">
								<img src="./assets/images/about-establish.png" alt="" />
							</div>
						</div>
						<div className="col-5">
							<div className="right-description">
								<div className="about-header">
									<h2>Sứ mệnh và tầm nhìn</h2>
									<div className="about-border">
										<div className="special-border"></div>
										<div className="normal-border"></div>
									</div>
								</div>
								<span className="about-item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
									been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book. It has survived not only five
									centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
									It
									was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software like Aldus PageMaker including
									versions of Lorem Ipsum.
                        </span>
							</div>
						</div>
					</div>

					<div className="row about-item">
						<div className="col-5 ">
							<div className="left-description ">
								<div className="about-header">
									<h2>Truyền thông nói gì</h2>
									<div className="about-border">
										<div className="special-border"></div>
										<div className="normal-border"></div>
									</div>
								</div>
								<span className="about-item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
									been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book. It has survived not only five
									centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
									It
									was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software like Aldus PageMaker including
									versions of Lorem Ipsum.
                        </span>
							</div>
						</div>
						<div className="col-7 right-img">
							<div className="about-video">
								<YoutubeComp
									videoId={'jlv3mhCk11U'}
									opts={{ height: '422px', with: '100%' }}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="about-map">
					<Map />
				</div>
			</div>
		)
	}
}

export default About;