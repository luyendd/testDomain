import React from 'react';
import './MessengerList.scss';
import MessageItem from '../MessageItem/MessageItem';

const messages = [
    {
        avatar: 'assets/images/teacher-avatar.png',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        time: '6:42 AM',
    },
    {
        avatar: 'assets/images/teacher-avatar.png',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        time: '6:42 AM',
        myMessage: true,
    },
];

class MessengerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="message-list">
                {messages.map((item, index) => {
                    return (
                        <MessageItem {...item} key={index} />
                    );
                })}
            </div>
        )
    }
}

export default MessengerList;