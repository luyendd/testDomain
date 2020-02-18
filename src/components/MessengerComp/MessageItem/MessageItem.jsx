import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';

class MessageItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={`${this.props.myMessage !== true ? 'message-item' : 'my-message'}`}>
                <ImageComp styleName={'avatar'} src={this.props.avatar} />
                <div className="message-content">
                    <div className="message-detail">
                        <span className="message">{this.props.message}</span>
                    </div>
                    <div className="message-time">{this.props.time}</div>
                </div>
            </div>
        )
    }
}

export default MessageItem;