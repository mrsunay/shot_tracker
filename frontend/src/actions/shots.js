import axios from "axios";

import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_SHOTS, DELETE_SHOTS, ADD_SHOTS } from "./types";

// GET SHOTS
export const getShots = () => (dispatch, getState) => {
  axios
    .get("/api/shots/", tokenConfig(getState))
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
export const deleteShots = id => (dispatch, getState) => {
  axios
    .delete(`/api/shots/${id}/`, tokenConfig(getState))
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
export const addShots = shots => (dispatch, getState) => {
  axios
    .post("/api/shots/", shots, tokenConfig(getState))
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
