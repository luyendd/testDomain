import React from 'react';
import './RegisterFormDetail.scss';

class RegisterFormDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            teacherId: '',
            classId: '',
        };
    }

    render() {
        return (
            <div className="register-form">
                <h6 className="course-title">Đăng ký học thử</h6>

                <div className="register-form-body">
                    <div className="register-form-body-item">
                        <input type="text" value="Số điện thoại" disabled />
                        <input type="text" className="value" defaultValue="0326 483 884" />
                    </div>
                    <div className="register-form-body-item">
                        <input type="text" value="Tên giảng viên" disabled />
                        <input type="text" className="value" defaultValue="Nguyễn Thị Kim Tuyến" />
                    </div>
                    <div className="register-form-body-item">
                        <input type="text" value="Khoá học" disabled />
                        <input type="text" className="value" defaultValue="Chọn khoá học và lớp học" />
                    </div>
                    <div className="register-form-body-item">
                        <input type="text" value="Thời gian học" disabled />
                        <input type="text" className="value disable-comp" defaultValue="03/11/2019 - 19h30" />
                    </div>
                    <div className="register-form-header-item">
                        <button className="chat-btn">Trò chuyện</button>
                        <button className="register-study-btn">Đăng ký</button>
                    </div>
                </div>

                <div className="register-form-footer">
                    <div className="hotline">Hotline: <span>19004788</span></div>
                </div>
            </div>
        )
    }
}

export default RegisterFormDetail;