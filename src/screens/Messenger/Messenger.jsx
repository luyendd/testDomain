import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import MessengerListUser from 'components/MessengerComp/MessengerListUser/MessengerListUser';
import MessengerList from 'components/MessengerComp/MessengerList/MessengerList';
import './Messenger.scss';

class Messenger extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.hideComp) {
            this.props.hideComp();
        }

        this.state = {};
    }

    render() {
        return (
            <div className="messenger-container">
                <div className="left">
                    <div className="header">
                        <input type="text" className="search-input" placeholder="Tìm kiếm…" />
                        <MdSearch className="search-icon" />
                    </div>
                    <MessengerListUser />
                </div>
                <div className="right">
                    <div className="header">
                        <span className="title">Khoá học giao tiếp cơ bản-CB106</span>
                    </div>
                    <MessengerList />
                </div>
            </div>
        )
    }
}

export default withRouter(Messenger);