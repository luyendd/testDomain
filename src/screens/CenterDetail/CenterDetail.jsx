import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import YoutubeComp from 'components/YoutubeComp/YoutubeComp';
import TopBarDetail from 'components/TopBarDetail/TopBarDetail';
import BasicQuestion from 'components/BasicQuestion/BasicQuestion';
import RatingNComment from 'components/RatingNComment/RatingNComment';
import RegisterFormDetail from 'components/RegisterFormDetail/RegisterFormDetail';
import SliderComp from 'components/SliderComp/SliderComp';
import Map from 'components/Map/Map';
import { getCenterDetail } from './redux';
import './CenterDetail.scss';

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
        title: 'Giảng viên',
        index: 2,
    },
    {
        title: 'Đánh giá & Bình luận',
        index: 3,
    },
];

class CenterDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTopBar: 0,
        };
    }

    componentDidMount() {
        const payload = {
            url: `v3/centers/${this.props.match.params.slug}`,
        };
        this.props.getCenterDetail(payload);
    }

    onChangeTopBar = (index) => {
        this.setState({
            activeTopBar: index,
        });
    }

    render() {
        if (this.props.centerDetail == null) {
            return null;
        }
        const data = this.props.centerDetail.center;
        console.log(data);

        return (
            <div>
                <Banner />
                <div className="container teacher-detail-information">
                    <div className="row basic-information">
                        <div className="col-8">
                            <h4 className="course-title">Giảng viên: Đây là tên của giảng viên</h4>
                            <TopBarDetail data={topBars} activeBar={this.state.activeTopBar} onChangeTopBar={this.onChangeTopBar} />
                            
                            <div className="course-information course-content border">
                                <div className="description">
                                    <h6 className="course-title">Thông tin chung</h6>
                                    <div dangerouslySetInnerHTML={{ __html: data.description }} />
                                </div>
                            </div>
                            <div className="map">
                                <Map location={{lng: 1}}/>
                            </div>

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

                    <SliderComp type={'teacher'} url={`v3/teachers/by-center/${data.id}`} title={'Giảng viên ưu tú'} />
                    
                    <SliderComp url={`v3/courses/by-center/${data.id}`} title={'Khóa học nổi bật'} />

                    <BasicQuestion />

                    <RatingNComment />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    centerDetail: state.CenterDetail,
});

const mapDispatchToProps = dispatch => ({
    getCenterDetail: payload => dispatch(getCenterDetail(payload))
});

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(withRouter(CenterDetail))
);