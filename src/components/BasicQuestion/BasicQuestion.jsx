import React from 'react';
import './BasicQuestion.scss';

const questionList = [
	{
		like: 0,
		question: 'Mình hiện tại đã mất gốc về tiếng anh. Trung tâm cho hỏi có khoá nào	dành cho người mất gốc không ạ ?',
		answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
		answeredDate: '12/11/2019 - 17:14',
	},
	{
		like: 2,
		question: 'Mình hiện tại đã mất gốc về tiếng anh. Trung tâm cho hỏi có khoá nào	dành cho người mất gốc không ạ ?',
		answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
		answeredDate: '12/11/2019 - 17:14',
	},
	{
		like: 15,
		question: 'Mình hiện tại đã mất gốc về tiếng anh. Trung tâm cho hỏi có khoá nào	dành cho người mất gốc không ạ ?',
		answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
		answeredDate: '12/11/2019 - 17:14',
	},
];

class BasicQuestion extends React.Component {
	static defaultProps = {
		data: questionList,
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (

			<div className="basic-question border">
				<h6 className="course-title">Hỏi đáp về giảng viên</h6>
				{this.props.data.map((item, index) => {
					return (
						<div key={index} className="question">
							<div className="col-1 like">
								<h1>{item.like}</h1>
								<span>Thích</span>
							</div>
							<div className="col-11 detail">
								<p className="question-title">{item.question}</p>
								<span className="question-answer">{item.answer}</span>
								<span className="question-time-answered">Edutalk đã trả lời vào {item.answeredDate}</span>
								<div className="question-btn">
									<button><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>Thích</button>
									<button><i className="fa fa-reply" aria-hidden="true"></i>Trả lời</button>
								</div>
							</div>
						</div>
					);
				})}

				<div className="view-all">
					<a href="/" className="view-all-question">Xem tất cả các câu trả lời</a>
				</div>

				<div className="question-form">
					<div className="col-10">
						<input type="text" className="question-text" placeholder="Hãy đặt câu hỏi của bạn…" />
					</div>
					<div className="col-2">
						<button className="question-send-btn btn">Gửi câu hỏi</button>
					</div>
				</div>
			</div>

		)
	}
}

export default BasicQuestion;