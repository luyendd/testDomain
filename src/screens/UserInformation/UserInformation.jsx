import React from 'react';
import TopBarDetail from 'components/TopBarDetail/TopBarDetail';
import Banner from 'components/Banner/Banner';
import ImageComp from 'components/ImageComp/ImageComp';
import './UserInformation.scss';
import AccountCourses from 'components/UserComp/AccountCourses/AccountCourses';
import AccountInfo from 'components/UserComp/AccountInfo/AccountInfo';

const topBars = [
    {
        title: 'Thông tin tài khoản',
        index: 0,
    },
    {
        title: 'Khoá học của tôi',
        index: 1,
    },
    {
        title: 'Khoá học đã lưu',
        index: 2,
    },
    {
        title: 'Giảng viên đã lưu',
        index: 3,
    },
    {
        title: 'Bài tập',
        index: 4,
    },
];

class UserInformation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTopBar: 0,
            activeComp: <AccountInfo />,
        };
    }

    onChangeTopBar = (index) => {
        let activeComp;
        switch (index) {
            case 0:
                activeComp = <AccountInfo />
                break;
            case 1:
                activeComp = <AccountCourses />;
                break;
            case 2:

                break;
            case 3:

                break;
            default:
                break;
        }
        this.setState({
            activeTopBar: index,
            activeComp,
        });
    }

    render() {
        return (
            <div>
                <Banner />

                <div className="container user-information">
                    <div className="row">
                        <div className="col-3">
                            <div className="left">
                                <ImageComp styleName={'avatar'} src={'assets/images/teacher-avatar.png'} />
                                <div className="name">Trần Nguyễn Phương Ly</div>
                                <div className="surplus">
                                    <span className="label">Số dư:</span>
                                    <span className="money">100.000.000 VNĐ</span>
                                </div>
                                <button className="pay-button">Nạp</button>
                            </div>
                        </div>
                        <div className="col-9 right">
                            <TopBarDetail data={topBars} activeBar={this.state.activeTopBar} onChangeTopBar={this.onChangeTopBar} />

                            {this.state.activeComp}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInformation;