import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';
import { FaStar } from 'react-icons/fa';
import './RatingNComment.scss';

const ratingList = [
	{
		userImage: 'assets/images/teacher-avatar.png',
		userName: 'Tên người đánh giá',
		isMember: true,
		comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
		date: '12/11/2019 - 17:14',
		rating: '',
	},
	{
		userImage: 'assets/images/teacher-avatar.png',
		userName: 'Tên người đánh giá',
		isMember: true,
		comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
		date: '12/11/2019 - 17:14',
		rating: '',
	},
	{
		userImage: 'assets/images/teacher-avatar.png',
		userName: 'Tên người đánh giá',
		isMember: true,
		comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
		date: '12/11/2019 - 17:14',
		rating: '',
	},
];

class RatingNComment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="rating border">
				<div className="rating-content">
					<h6 className="course-title">Đánh giá & Bình luận</h6>

					<div className="user-rating">
						<div className="col-4 vote">
							<div className="average-vote">
								<h1>5,0</h1>
								<div className="course-item-detail-vote">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</div>
							</div>
							<div className="user-vote">
								<div className="vote-item">
									<span>5</span><FaStar className={'vote-item-icon'} />
									<div className="vote-bar active"></div>
								</div>
								<div className="vote-item">
									4<FaStar className={'vote-item-icon'} />
									<div className="vote-bar"></div>
								</div>
								<div className="vote-item">
									3<FaStar className={'vote-item-icon'} />
									<div className="vote-bar"></div>
								</div>
								<div className="vote-item">
									2<FaStar className={'vote-item-icon'} />
									<div className="vote-bar"></div>
								</div>
								<div className="vote-item">
									1<FaStar className={'vote-item-icon'} />
									<div className="vote-bar"></div>
								</div>
							</div>
						</div>
						<div className="col-8 comment-content">
							<p className="comment-title">Viết đánh giá khoá học</p>
							<div className="course-item-detail-vote">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<span>Chọn sao để đánh giá</span>
							</div>
							<div className="comment-input">
								<textarea name="" id="" placeholder="Mời bạn viết đánh giá về khoá học này…"></textarea>
							</div>
						</div>
					</div>

					<div className="rating-btn">
						<div className="rating-filter-btn">
							<div className="btn">Tất cả</div>
							<div className="btn">1 sao ( 0 )</div>
							<div className="btn">2 sao ( 0 )</div>
							<div className="btn">3 sao ( 0 )</div>
							<div className="btn">4 sao ( 0 )</div>
							<div className="btn">5 sao ( 1000 )</div>
						</div>
						<div className="rating-submit-btn btn">
							Gửi đánh giá
                        </div>

					</div>

					<div className="rating-detail">
						<div className="rating-border"></div>
						{ratingList.map((item, index) => {
							return (
								<div key={index} className="rating-detail-item">
									<div className="user-avatar">
										<ImageComp src={item.userImage} />
									</div>
									<div className="col description">
										<p className="username">
											{item.userName}
											{item.isMember === true && (
												<>
													<img src={`${process.env.PUBLIC_URL}/assets/images/icons/verify-user.png`} alt=""/>
													<span>Thành viên của khoá học</span>
												</>
											)}
										</p>
										<div className="course-item-detail-vote">
											<FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
											<span>{item.date}</span>
										</div>
										<p className="comment">{item.comment}</p>
									</div>
								</div>

							);
						})}
					</div>
				</div>
			</div>

		)
	}
}

export default RatingNComment;