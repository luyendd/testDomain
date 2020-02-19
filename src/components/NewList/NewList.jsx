import React from 'react';
import SpecialItem from 'components/Luggage/SpecialItem/SpecialItem';
import './NewList.scss';

class NewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div className="row new-list">
                    {this.props.posts && this.props.posts.data.map((item, index) => {
                        return (
                            <SpecialItem newType={true} key={index} img={item.featured_image.path_string} data={item} />
                        );
                    })}
                </div>
            </>
        )
    }
}

export default NewList;