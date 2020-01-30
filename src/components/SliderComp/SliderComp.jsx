import React from 'react';
import './SliderComp.scss';

class SliderComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="row edu-teacher best-course">
                <div className="edu-title">
                    <h3>Khoá học nổi bật</h3>
                    <a className="view-all-link">Xem tất cả</a>
                </div>
                <div className="row course-list edu-content">
                    <div className="slide-btn previous-btn">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div className="slide-btn next-btn">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>

                </div>
            </div>
        )
    }
}

export default SliderComp;