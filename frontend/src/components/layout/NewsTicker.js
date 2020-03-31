import React, { Component, Fragment } from "react";
// import "../../css/ticker.css";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import PropTypes from "prop-types";
import Marquee from "react-smooth-marquee";

export class NewsTicker extends Component {
  static propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.array.isRequired
  };

  componentDidMount() {
    console.log("hello");
    this.props.getNews();
  }

  render() {
    const newsItems = this.props.news.map((headline, i) => (
      <a key={i} href={headline.url} style={{ whiteSpace: "nowrap" }}>
        || {headline.title} ||
      </a>
    ));
    return <Marquee>{newsItems}</Marquee>;
  }
}

const mapStateToProps = state => ({
  news: state.news.news
});

export default connect(mapStateToProps, { getNews })(NewsTicker);
