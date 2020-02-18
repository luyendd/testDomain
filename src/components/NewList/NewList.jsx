import React from 'react';
import './NewList.scss';
import SpecialItem from 'components/Luggage/SpecialItem/SpecialItem';

const newList = [
    {
        id: 1,
        img: 'assets/images/edu-intro.png',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
        newType: 'Kinh Nghiệm',
        type: 1,
    },
    {
        id: 2,
        img: 'assets/images/edu-intro.png',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
        newType: 'Trải Nghiệm',
        type: 2,
    },
    {
        id: 3,
        img: 'assets/images/edu-intro.png',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
        newType: 'Kinh Nghiệm',
        type: 1,
    },
    {
        id: 4,
        img: 'assets/images/edu-intro.png',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
        newType: 'Trải Nghiệm',
        type: 2,
    },
    {
        id: 5,
        img: 'assets/images/edu-intro.png',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
        newType: 'Kinh Nghiệm',
        type: 1,
    },
    {
        id: 6,
        img: 'assets/images/edu-intro.png',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
        newType: 'Trải Nghiệm',
        type: 2,
    },
];

class NewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div className="row new-list">
                    {newList.map((item, index) => {
                        return (
                            <SpecialItem key={index}  {...item} />
                        );
                    })}
                </div>
            </>
        )
    }
}

export default NewList;