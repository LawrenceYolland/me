import { SET_MENU } from "../actions/types";

const initialState = {
  menu: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        menu: !state.menu
      };
    default:
      return state;
  }
};
