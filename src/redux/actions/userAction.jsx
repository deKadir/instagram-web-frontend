import { user } from "redux/types";

export const saveUserInfo = (payload) => {
  return {
    type: user.SAVE,
    payload,
  };
};
