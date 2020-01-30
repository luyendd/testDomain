import React from 'react';
import Banner from 'components/Banner/Banner';
import YoutubeComp from 'components/YoutubeComp/YoutubeComp';
import TopBarDetail from 'components/TopBarDetail/TopBarDetail';
import TeacherIntroduction from 'components/TeacherIntroduction/TeacherIntroduction';
import BasicQuestion from 'components/BasicQuestion/BasicQuestion';
import RatingNComment from 'components/RatingNComment/RatingNComment';
import RegisterFormDetail from 'components/RegisterFormDetail/RegisterFormDetail';
import './TeacherDetail.scss';

const topBars = [
    {
        title: 'Thông tin chung',
        index: 0,
    },
    {
        title: 'Khóa học',
        index: 1,
    },
    {
        title: 'Đánh giá & Bình luận',
        index: 2,
    },
];

class TeacherDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTopBar: 0,
        };
    }

    onChangeTopBar = (index) => {
        this.setState({
            activeTopBar: index,
        });
    }

    render() {
        return (
            <div>
                <Banner />
                <div className="container teacher-detail-information">
                    <div className="row basic-information">
                        <div className="col-8">
                            <h4 className="course-title">Giảng viên: Đây là tên của giảng viên</h4>
                            <TopBarDetail data={topBars} activeBar={this.state.activeTopBar} onChangeTopBar={this.onChangeTopBar} />

                            <TeacherIntroduction type={'teacher'} />

                            <div className="video">
                                <YoutubeComp videoId={'hKRUPYrAQoE'} />
                            </div>

                        </div>
                        <div className="col-4 register">
                            <div className="sticky-top register-form-border">
                                <RegisterFormDetail />
                            </div>
                        </div>
                    </div>

                    <BasicQuestion />

                    <RatingNComment />
                </div>
            </div>
        )
    }
}

export default TeacherDetail;