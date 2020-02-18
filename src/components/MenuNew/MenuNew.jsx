import React from 'react';
import { MdSearch } from 'react-icons/md';
import './MenuNew.scss';

const news = [
    {
        title: 'Đây là tiêu đề của bài viết vừa mới được đăng.',
    },
    {
        title: 'Đây là tiêu đề của bài viết vừa mới được đăng.',
    },
    {
        title: 'Đây là tiêu đề của bài viết vừa mới được đăng.',
    },
    {
        title: 'Đây là tiêu đề của bài viết vừa mới được đăng.',
    },
    {
        title: 'Đây là tiêu đề của bài viết vừa mới được đăng.',
    },
];

class MenuNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="menu-new">
                <div className="search">
                    <input type="text" className="search-input" placeholder={'Tìm kiếm bài tin…'} />
                    <MdSearch className="search-icon" />
                </div>

                <div className="new-type">
                    <p className="header">Chuyên mục</p>
                    <div className="header-border">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <div className="new-type-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-hat-blue.png`} className="icon" alt="" />
                        <div className="title">Trải nghiệm đặc biệt ( 50 )</div>
                    </div>

                    <div className="new-type-item item-border item-border-top">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-hat-blue.png`} className="icon" alt="" />
                        <div className="title">Kinh nghiệm học ( 50 )</div>
                    </div>

                    <div className="new-type-item item-border item-border-top">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-hat-blue.png`} className="icon" alt="" />
                        <div className="title">Tuyển dụng ( 02 )</div>
                    </div>
                </div>

                <div className="new-type">
                    <p className="header">Bài viết mới</p>
                    <div className="header-border">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    {news.map((item, index) => {
                        return (
                            <div key={index} className="new-type-item item-border item-border-bottom">
                                <div className="special-title">0{index + 1}<span className="new-title">. {item.title}</span>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        )
    }
}

export default MenuNew;