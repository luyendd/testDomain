import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { CenterItem, TeacherItem } from './Item/Item';
import './ListData.scss';

class ListData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        if (this.props.data == null) {
            return null;
        }
        console.log(this.props.data);

        return (
            <div className="row edu-teacher best-teacher">
                <div className="edu-title">
                    <h3>{this.props.title}</h3>
                    <a className="view-all-link" href='/'>Xem tất cả
						<FiChevronsRight className="icon-view-all" />
                    </a>
                </div>
                <div className="row course-list edu-content">
                    {this.props.data.map((item, index) => {
                        if (index + 1 > this.props.limit) {
                            return null;
                        }
                        if (this.props.type === 'teacher') {
                            return (
                                <TeacherItem key={index} data={item} />
                            );
                        }
                        else {
                            return (
                                <CenterItem key={index} data={item} />
                            );
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default ListData;