import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { AiFillFacebook, AiOutlineGoogle } from 'react-icons/ai';
import { isEmpty, isInValidEmail } from 'ultis/commom';
import { login } from './redux';
import './Login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignUp: false,
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            redirect: false,
        };

        if (this.props.hideComp) {
            this.props.hideComp();
        }
    }

    componentDidUpdate() {
        if (this.props.authentication.status === true) {
            this.setState({
                redirect: true,
            });
            this.props.showComp();
        }
    }

    changeMode = () => {
        this.setState({
            isSignUp: !this.state.isSignUp,
        });
    }

    submit = (event) => {
        this.validateInput();
        event.preventDefault();
        const data = new FormData(event.target);
        const params = {
            data,
        };

        if (this.state.isSignUp === false) {
            this.login(params);
        }
    }

    login = (params) => {
        this.props.login(params);
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
            usernameError: null,
        });
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value,
            passwordError: null,
        });
    }

    validateInput = () => {
        let usernameError = null;
        let passwordError = null;

        if (isEmpty(this.state.password) === true) {
            passwordError = '*Vui lòng nhập mật khẩu';
        } else {
            passwordError = null;
        }

        if (isEmpty(this.state.username) === true) {
            usernameError = '*Vui lòng nhập email';
        } else if (isInValidEmail(this.state.email) === true) {
            usernameError = '*Bạn điền sai email. Vui lòng nhập lại email';
        } else {
            usernameError = null;
        }

        this.setState({
            usernameError,
            passwordError,
        });
    }

    render() {
        if (this.state.redirect === true) {
            if (this.props.location.state.previousPath != null) {
                return <Redirect to={this.props.location.state.previousPath} />
            } else {
                return <Redirect to="/" />
            }
        }

        return (
            <div className="login-container">
                <div className="login-row header">
                    <h3 className="title">Nền tảng kết nối giảng viên uy tín</h3>
                    <span className="text btn" onClick={this.changeMode}>{this.state.isSignUp !== true ? 'Đăng ký tài khoản mới' : 'Đăng nhập'}</span>
                </div>
                <div className="login-row">
                    <span className="note-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                <div className="login-row content">
                    <form method="POST" onSubmit={this.submit} className="content-left">
                        <span className="label">Đăng nhập nhanh với</span>
                        <div className="login-btn-list">
                            <button className="facebook-btn btn"><AiFillFacebook className="icon" /><span>Facebook</span></button>
                            <button className="google-btn btn"><AiOutlineGoogle className="icon" /><span>Google</span></button>
                        </div>
                        <span>{this.state.isSignUp !== true ? 'Đăng nhập bằng' : 'Đăng ký ngay'}</span>
                        <div className={`login-input`}>
                            {this.state.isSignUp === true && <input className="name" type="text" placeholder="Họ tên" />}
                            <input type="text" name="email" onChange={this.onChangeUsername} placeholder="Email hoặc số điện thoại" />
                            <input type="password" name="password" autoComplete="true" onChange={this.onChangePassword} className="password" placeholder="Mật khẩu" />
                        </div>
                        {this.state.isSignUp === true && <span className="signup-note">Bằng cách nhấp vào Đăng ký, bạn đồng ý với <b>Điều khoản</b>, <b> Quy chế hoạt động</b> và <b>Chính sách bảo mật</b> của Edutalk.</span>}
                        <div className="login-footer">
                            <button className="submit-btn btn">{this.state.isSignUp !== true ? 'Đăng nhập' : 'Đăng ký'}</button>
                            {this.state.isSignUp !== true ? <a href="/">Quên mật khẩu ?</a> : <span className="has-account btn" onClick={this.changeMode}>Đã có tài khoản</span>}
                        </div>
                    </form>
                    <div className="content-right">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logo/login-logo.png`} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authentication: state.Authentication,
});

const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload))
});

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(withRouter(Login))
);