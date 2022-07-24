import { CATEGORY_TYPE } from "./cateogory.type";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
};
export const categoryReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_TYPE.SET_CATEGORY:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
