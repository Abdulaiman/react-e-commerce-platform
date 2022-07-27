import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import categoriesMapSelector from "../../store/categories-map-selector";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories-map-selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesMapSelector);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];

        return categoriesIsLoading ? (
          <Spinner key={title} />
        ) : (
          <CategoryPreview title={title} key={title} products={product} />
        );
      })}
    </>
  );
};
export default CategoriesPreview;
