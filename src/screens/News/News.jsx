import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BannerNew from 'components/BannerNew/BannerNew';
import MenuNew from 'components/MenuNew/MenuNew';
import NewList from 'components/NewList/NewList';
import NewDetailComp from 'components/NewDetailComp/NewDetailComp';
import { getNews, getNewDetail } from './redux';
import './News.scss';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getNews();

        if (this.props.match.params.slug) {
            const payload = {
                url: `v3/posts/${this.props.match.params.slug}`,
            };
            this.props.getNewDetail(payload);
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.slug !== prevProps.match.params.slug) {
            const payload = {
                url: `v3/posts/${this.props.match.params.slug}`,
            };
            this.props.getNewDetail(payload);
        }
    }

    render() {
        console.log(this.props.newDetail);
        return (
            <div>
                <BannerNew route={'Trang chủ \xa0 / \xa0 Tin tức'} />

                <div className="container new">
                    <div className="new-container">
                        <div className="left">
                            {this.props.news && <MenuNew newPost={this.props.news.new_posts} terms={this.props.news.terms} />}
                        </div>

                        <div className="right">
                            {this.props.match.params.slug != null ?
                                (this.props.newDetail && <NewDetailComp post={this.props.newDetail.post} />)
                                : (this.props.news && <NewList posts={this.props.news.posts} />)}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: state.News,
    newDetail: state.NewDetail,
});


const mapDispatchToProps = dispatch => ({
    getNews: payload => dispatch(getNews(payload)),
    getNewDetail: payload => dispatch(getNewDetail(payload)),
});

export default (
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(withRouter(News))
);