import React from 'react';
import BannerNew from 'components/BannerNew/BannerNew';
import MenuNew from 'components/MenuNew/MenuNew';
import NewList from 'components/NewList/NewList';
import './News.scss';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <BannerNew route={'Trang chủ \xa0 / \xa0 Tin tức'} />

                <div className="container new">
                    <div className="new-container">
                        <div className="left">
                            <MenuNew />
                        </div>

                        <div className="right">
                            <NewList />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default News;