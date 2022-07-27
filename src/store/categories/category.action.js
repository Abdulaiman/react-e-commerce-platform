import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_TYPE } from "./cateogory.type";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
export const setcategories = (CategoriesArray) =>
  createAction(CATEGORY_TYPE.SET_CATEGORY, CategoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (CategoriesArray) =>
  createAction(CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS, CategoriesArray);
export const fetchCategoriesFail = (error) =>
  createAction(CATEGORY_TYPE.FETCH_CATEGORIES_FAILED, error);
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocument();
    console.log(categoriesArray);
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
};
