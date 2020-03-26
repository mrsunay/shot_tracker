import { GET_SHOTS } from "../actions/types.js";
import { bindActionCreators } from "redux";

const initialState = {
  shots: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOTS:
      return {
        ...state,
        shots: action.payload
      };
    default:
      return state;
  }
}
