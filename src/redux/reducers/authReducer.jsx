import { auth } from "redux/types";
const initialState = {
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
