import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);
const categoriesMapSelector = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
export default categoriesMapSelector;
