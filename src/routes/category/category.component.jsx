import "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import categoriesMapSelector from "../../store/categories-map-selector.js";
import { useSelector } from "react-redux";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesMapSelector);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};
export default Category;
