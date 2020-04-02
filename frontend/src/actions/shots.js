import axios from "axios";

import { createMessage, returnErrors } from "./messages";

import { GET_SHOTS, DELETE_SHOTS, ADD_SHOTS } from "./types";

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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete shots
export const deleteShots = id => dispatch => {
  axios
    .delete(`/api/shots/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteShots: "Workout Deleted" }));
      dispatch({
        type: DELETE_SHOTS,
        payload: id
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };

      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

// ADD SHOTS
export const addShots = shots => dispatch => {
  axios
    .post("/api/shots/", shots)
    .then(res => {
      dispatch(createMessage({ addShots: "Workout Added" }));
      dispatch({
        type: ADD_SHOTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
