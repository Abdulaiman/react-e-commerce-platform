import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../category preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
