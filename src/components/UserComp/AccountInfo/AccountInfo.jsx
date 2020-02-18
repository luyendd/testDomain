import React from 'react';
import './AccountInfo.scss';

class AccountInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="account-info">
                <div className="header">
                    <div className="header-label">Thông tin tài khoản</div>
                    <button className="student-rule">Điều khoản với học viên</button>
                </div>

                <div className="item">
                    <div className="col-6 account-input input-padding">
                        <label className="label" htmlFor="">Họ tên:</label>
                        <input className="input" defaultValue="Trần Văn A" type="text" />
                    </div>
                    <div className="col-6 account-input">
                        <label className="label" htmlFor="">Số điện thoại:</label>
                        <input className="input" defaultValue="0326 483 884" type="text" />
                    </div>
                </div>

                <div className="item">
                    <div className="account-input input-padding no-margin">
                        <label className="label" htmlFor="">Địa chỉ:</label>
                        <input className="input" defaultValue="151 Nguyễn Đức Cảnh, Hoàng Mai, Hà Nội" type="text" />
                    </div>
                </div>

                <div className="item">
                    <div className="account-input">
                        <label className="label" htmlFor="">Tỉnh / TP:</label>
                        <input className="input" defaultValue="Hà Nội" type="text" />
                    </div>
                    <div className="account-input" style={{
                        marginRight: '30px',
                        marginLeft: '30px'
                    }}>
                        <label className="label" htmlFor="">Quận/ Huyện:</label>
                        <input className="input" defaultValue="Hoàng Mai" type="text" />
                    </div>
                    <div className="account-input">
                        <label className="label" htmlFor="">Phường/ Thị xã:</label>
                        <input className="input" defaultValue="Tân Mai" type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountInfo;