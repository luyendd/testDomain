import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import './CollapseItem.scss';

class CollapseItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <>
                <div className={`filter-item-children ${this.props.grandChild === true ? 'grand-child' : ''} ${this.props.children != null ? 'has-child' : ''}`} {...this.props.children != null && { onClick: this.toggle }}>
                    <div className="filter-item-left">
                        <input type="checkbox" className="checkbox" />
                        <span className="title">{this.props.label}</span>
                    </div>
                    {this.props.children && (this.state.collapse === true ? <IoIosArrowDown /> : <IoIosArrowUp />)}
                </div>
                {this.props.children && this.props.children.map((item, index) => {
                    return (
                        <div key={index} className={`filter-item-content ${this.state.collapse === false ? 'active' : ''}`}>
                            <CollapseItem grandChild={true} {...item} />
                        </div>
                    );
                })}
            </>
        )
    }
}

export default CollapseItem;