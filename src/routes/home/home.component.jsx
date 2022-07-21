import CategoriesDirectory from "../../components/category-directory/category-directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoriesDirectory />
    </div>
  );
};

export default Home;
