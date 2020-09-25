import { GET_CATEGORIES } from "./types";
import data from "../menu.json";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: data.menus,
  };
};
