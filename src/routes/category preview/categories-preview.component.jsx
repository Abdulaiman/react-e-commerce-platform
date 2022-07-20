import "./categories-preview.styles.scss";
import { useContext, Fragment, useEffect } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories-context";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
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
