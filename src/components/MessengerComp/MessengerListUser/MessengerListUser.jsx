import React from 'react';
import UserItem from '../UserItem/UserItem';
import './MessengerListUser.scss';

const listUsers = [
    {
        name: 'Giảng viên: Nguyễn Thị B',
        lastMessage: 'Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên',
    },
    {
        name: 'Giảng viên: Nguyễn Thị B',
        lastMessage: 'Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên',
    },
    {
        name: 'Giảng viên: Nguyễn Thị B',
        lastMessage: 'Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên',
    },
    {
        name: 'Giảng viên: Nguyễn Thị B',
        lastMessage: 'Đây là tin nhắn của giảng viên Đây là tin nhắn của giảng viên',
    },
];

class MessengerListUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUser: 0,
        };
    }

    changeActiveUser = (index) => {
        this.setState({
            activeUser: index,
        });
    }

    render() {
        return (
            <div className="messenger-list-user">
                {listUsers.map((item, index) => {
                    return (
                        <UserItem changeActiveUser={this.changeActiveUser} index={index} active={index === this.state.activeUser} key={index} {...item} />
                    );
                })}
            </div>
        )
    }
}

export default MessengerListUser;