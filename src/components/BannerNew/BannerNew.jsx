import React from 'react';
import './BannerNew.scss';

class BannerNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="banner-new">
                <div className="banner-route">
                    {this.props.route}
                </div>
            </div>
        )
    }
}

export default BannerNew;