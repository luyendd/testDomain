import React from 'react';
import { FaTimes } from 'react-icons/fa';
import CollapseComp from 'components/CollapseComp/CollapseComp';
import './AdvancedFilter.scss';

const data = [
    {
        icon: 'assets/images/icons/open-book.svg',
        label: 'Khoá học',
        children: [
            {
                label: 'Phát âm',
                children: [
                    { label: 'Phát âm căn bản' },
                    { label: 'Phát âm nâng cao' },
                ],
            },
        ]
    },
];

class AdvancedFilter extends React.Component {
    closeAdvancedFilter = () => {
        this.props.toggleFunc();
    }

    render() {
        return (
            <div className={`advanced-filter-container ${this.props.toggle === true ? 'open-menu' : ''}`}>
                <div className="filter-header">
                    <span>Tìm kiếm nâng cao</span>
                    <FaTimes className="close-icon" onClick={this.closeAdvancedFilter} />
                </div>

                <div className="filter-content">
                    {data.map((item, index) => {
                        return (
                            <CollapseComp {...item} key={index} />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default AdvancedFilter;