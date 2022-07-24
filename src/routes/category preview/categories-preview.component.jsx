import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import categoriesMapSelector from "../../store/categories-map-selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesMapSelector);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];

        return <CategoryPreview title={title} key={title} products={product} />;
      })}
    </>
  );
};
export default CategoriesPreview;
