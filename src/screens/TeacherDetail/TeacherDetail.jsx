import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import YoutubeComp from 'components/YoutubeComp/YoutubeComp';
import TopBarDetail from 'components/TopBarDetail/TopBarDetail';
import TeacherIntroduction from 'components/TeacherIntroduction/TeacherIntroduction';
import BasicQuestion from 'components/BasicQuestion/BasicQuestion';
import RatingNComment from 'components/RatingNComment/RatingNComment';
import RegisterFormDetail from 'components/RegisterFormDetail/RegisterFormDetail';
import SliderComp from 'components/SliderComp/SliderComp';
import { getTeacherDetail } from './redux';
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

    componentDidMount() {
        const payload = {
            url: `v3/teachers/${this.props.match.params.slug}`,
        };
        this.props.getTeacherDetail(payload);
    }

    onChangeTopBar = (index) => {
        this.setState({
            activeTopBar: index,
        });
    }

    render() {
        const data = this.props.teacherDetail;
        if (data == null) {
            return null;
        }
        console.log(data);
        
        return (
            <div>
                <Banner />
                <div className="container teacher-detail-information">
                    <div className="row basic-information">
                        <div className="col-8">
                            <h4 className="course-title">Giảng viên: Đây là tên của giảng viên</h4>
                            <TopBarDetail data={topBars} activeBar={this.state.activeTopBar} onChangeTopBar={this.onChangeTopBar} />

                            <TeacherIntroduction data={data} type={'teacher'} />

                            {data.url_intro && <div className="video">
                                <YoutubeComp videoId={data.url_intro.substring(data.url_intro.lastIndexOf('/') + 1)} />
                            </div>}

                        </div>
                        <div className="col-4 register">
                            <div className="sticky-top register-form-border">
                                <RegisterFormDetail />
                            </div>
                        </div>
                    </div>

                    <SliderComp title={'Khóa học nổi bật'} />

                    <BasicQuestion />

                    <RatingNComment />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    teacherDetail: state.TeacherDetail,
});

const mapDispatchToProps = dispatch => ({
    getTeacherDetail: payload => dispatch(getTeacherDetail(payload))
});

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(withRouter(TeacherDetail))
);