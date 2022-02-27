import { BASE_URL } from "constants/ApiConfig";
export const getImage = (image) => {
  return `${BASE_URL}getImage/${image}`;
};
