import axios from "axios";

import { GET_SHOTS } from "./types";

// GET SHOTS
export const getShots = () => dispatch => {
  axios
    .get("/api/shots/")
    .then(res => {
      dispatch({
        type: GET_SHOTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
