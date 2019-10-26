import { SET_MODE } from "../actions/types";

const initialState = {
  mode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        mode: !state.mode
      };
    default:
      return state;
  }
};
