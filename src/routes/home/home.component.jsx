import CategoriesDirectory from "../../components/category-directory/category-directory.component";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setcategoriesMap } from "../../store/categories/category.action";
const Home = () => {
  
  return (
    <div>
      <Outlet />
      <CategoriesDirectory />
    </div>
  );
};

export default Home;
