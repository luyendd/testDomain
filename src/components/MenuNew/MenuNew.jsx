import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './MenuNew.scss';

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

                    {this.props.terms && this.props.terms.map((item, index) => {
                        return (
                            <div key={index} className={`new-type-item ${index !== 0 ? 'item-border item-border-top' : ''}`}>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon-hat-blue.png`} className="icon" alt="" />
                                <div className="title">{item.name} ( {item.total} )</div>
                            </div>
                        )
                    })}
                </div>

                <div className="new-type">
                    <p className="header">Bài viết mới</p>
                    <div className="header-border">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    {this.props.newPost.map((item, index) => {
                        return (
                            <Link to={`/new/${item.slug}`} key={index} className="new-type-item item-border item-border-bottom">
                                <div className="special-title">0{index + 1}<span className="new-title">. {item.title}</span>
                                </div>
                            </Link>
                        );
                    })}

                </div>
            </div>
        )
    }
}

export default MenuNew;