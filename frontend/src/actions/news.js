import axios from "axios";

import { GET_NEWS } from "./types";

export const getNews = () => dispatch => {
  console.log("fetchiing");
  fetch(
    "http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8828ff31e80a4376bba5df5fedf1b03a"
  )
    .then(res => res.json())
    .then(news =>
      dispatch({
        type: GET_NEWS,
        payload: news.articles
      })
    );
};
