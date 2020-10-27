import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 10, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      // eslint-disable-next-line no-unused-vars
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;