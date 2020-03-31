import { GET_SHOTS, DELETE_SHOTS, ADD_SHOTS } from "../actions/types.js";

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
    case DELETE_SHOTS:
      return {
        ...state,
        shots: state.shots.filter(shot => shot.id !== action.payload)
      };
    case ADD_SHOTS:
      return {
        ...state,
        shots: [...state.shots, action.payload]
      };
    default:
      return state;
  }
}
