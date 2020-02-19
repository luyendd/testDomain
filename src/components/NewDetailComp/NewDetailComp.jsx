import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import './NewDetailComp.scss';

class NewDetailComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { post } = this.props;

        return (
            <div className="new-detail">
                <div className="header">
                    <h3 className="title">{post.title}</h3>
                    <div className="detail">
                        <div className="detail-item">
                            <FaRegCalendar className="icon" />
                            <span className="text">{post.updated_at}</span>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
            </div>
        )
    }
}

export default NewDetailComp;