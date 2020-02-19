import React from 'react';
import { Redirect } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { renderStarts } from 'ultis/display';
import './Item.scss';

export class CenterItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        };
    }

    goToCenterDetail = () => {
        this.setState({
            redirect: true,
        });
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect push to={`/center/${this.props.data.slug}`} />
        }

        let img = '';
        if (this.props.data && this.props.data.files && this.props.data.files.length > 0) {
            img = this.props.data.files[0].path_string;
        }

        return (
            <div className="col-3" onClick={this.goToCenterDetail}>
                <div className="course-item item">
                    <div className="course-item-content">
                        <div className="course-item-image">
                            <img className="course-image" src={img} alt="" />
                            <div className="course-img-teacher">
                                <div className="teacher-avatar">
                                    <img src={this.props.data.avatar} alt="" />
                                </div>
                                <span className="teacher-name">{this.props.data.name}</span>
                            </div>
                        </div>
                        <div className="course-item-detail">
                            <div className="course-item-detail-vote">
                                {renderStarts(this.props.data.avg_rate / 2)}
                            </div>
                            <div className="course-item-detail-location">
                                {this.props.data.address && this.props.data.address !== 'NA' && <>
                                    <FaMapMarkerAlt className={'map-icon'} />
                                    <span className="location">{this.props.data.address}</span>
                                </>}
                            </div>
                            <div className="course-item-detail-bottom">
                                {this.props.data.excerpt}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class TeacherItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        };
    }

    goToTeacherDetail = () => {
        this.setState({
            redirect: true,
        });
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect push to={`/teacher/${this.props.data.slug}`} />
        }

        return (
            <div className={this.props.className != null ? this.props.className : 'col-3'} onClick={this.goToTeacherDetail}>
                <div className="course-item item">
                    <div className="course-item-content">
                        <div className="course-item-image">
                            <img className="course-image" src={''} alt="" />
                            <div className="course-img-teacher">
                                <div className="teacher-avatar">
                                    <img src={this.props.data.image.path} alt="" />
                                </div>
                                <span className="teacher-name">{this.props.data.name}</span>
                            </div>
                        </div>
                        <div className="course-item-detail">
                            <div className="course-item-detail-vote">
                                {renderStarts(this.props.data.avg_rate_teachers ? this.props.data.avg_rate_teachers / 2 : 0)}
                            </div>
                            <div className="course-item-detail-location">
                                {this.props.data.address && this.props.data.address !== 'NA' && <>
                                    <FaMapMarkerAlt className={'map-icon'} />
                                    <span className="location">{this.props.data.address}</span>
                                </>}
                            </div>
                            <div className="course-item-detail-bottom">
                                {this.props.data.level}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
