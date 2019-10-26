import { SET_MODE } from "./types";

export const setMode = () => dispatch => {
  console.log("set mode activate");
  dispatch({
    type: SET_MODE
  });
};
