import { auth } from "../types";

export const saveToken = (payload) => {
  return {
    type: auth.LOGIN,
    payload,
  };
};
