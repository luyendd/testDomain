import React from 'react';
import ImageComp from 'components/ImageComp/ImageComp';

class UserItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    changeActiveUser = () => {
        if (this.props.active !== true) {
            this.props.changeActiveUser(this.props.index);
        }
    }

    render() {
        return (
            <div className={`user-item ${this.props.active === true ? 'active' : 'btn'}`} onClick={this.changeActiveUser}>
                <ImageComp styleName={'avatar'} src={'assets/images/teacher-avatar.png'} />
                <div className="user-content">
                    <span className="user-name">{this.props.name}</span>
                    <span className="last-message">{this.props.lastMessage}</span>
                </div>
            </div>
        )
    }
}

export default UserItem;