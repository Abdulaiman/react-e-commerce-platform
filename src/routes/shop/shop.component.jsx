import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../category preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setcategories } from "../../store/categories/category.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const categoriesArray = await getCategoriesAndDocument();
      console.log(categoriesArray);
      dispatch(setcategories(categoriesArray));
    };
    getData();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
