import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ImageComp from 'components/ImageComp/ImageComp';
import CollapseItem from './CollapseItem/CollapseItem';
import './CollapseComp.scss';

class CollapseComp extends React.Component {
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
            <div className="filter-item">
                <div className="filter-item-header" onClick={this.toggle}>
                    <div className="filter-item-left">
                        <ImageComp src={this.props.icon} />
                        <span className="title">{this.props.label}</span>
                    </div>
                    {this.state.collapse === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {this.props.children && this.props.children.map((item, index) => {
                    return (
                        <div key={index} className={`filter-item-content ${this.state.collapse === false ? 'active' : ''}`}>
                            <CollapseItem {...item} />
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default CollapseComp;