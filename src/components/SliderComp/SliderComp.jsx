import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CourseItem from 'components/CourseItem/CourseItem';
import { TeacherItem } from 'components/ListData/Item/Item';
import './SliderComp.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getSliderData } from './redux';
import { connect } from 'react-redux';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="slide-btn next-btn" style={{ ...style }} onClick={onClick}>
            <FaChevronRight className="arrow-icon" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="slide-btn previous-btn" style={{ ...style }} onClick={onClick}>
            <FaChevronLeft className="arrow-icon" />
        </div>
    );
}

class SliderComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const payload = {
            url: this.props.url,
        };
        console.log(payload);

        this.props.getSliderData(payload);
    }

    render() {
        let data = null;

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };

        if (this.props.sliderData != null) {
            if (this.props.type === 'teacher') {
                data = this.props.sliderData.teachers;
            } else {
                data = this.props.sliderData.courses;
            }
        }

        if (data == null) return null;

        console.log(this.props.sliderData);

        return (
            <div className="row edu-teacher best-course">
                <div className="edu-title">
                    <h3>{this.props.title}</h3>
                    <a className="view-all-link" href='/'>Xem tất cả</a>
                </div>
                <Slider {...settings} className="slider">
                    {data && data.map((item, index) => {
                        if (this.props.type === 'teacher') {
                            return <TeacherItem key={index} data={item} className={'col'} />;
                        }
                        return (
                            <CourseItem data={item} key={index} className={'col'} />
                        );
                    })}
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sliderData: state.SliderData,
});

const mapDispatchToProps = dispatch => ({
    getSliderData: payload => dispatch(getSliderData(payload))
});

export default
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(SliderComp);