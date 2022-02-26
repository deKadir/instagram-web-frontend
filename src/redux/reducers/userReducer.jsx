import { user } from "redux/types";
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.SAVE:
      return action.payload;

    default:
      return state;
  }
};
export default userReducer;
