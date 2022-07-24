import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_TYPE } from "./cateogory.type";
export const setcategories = (CategoriesArray) =>
  createAction(CATEGORY_TYPE.SET_CATEGORY, CategoriesArray);
