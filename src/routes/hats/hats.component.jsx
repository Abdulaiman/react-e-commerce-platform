import ProductCard from "../../components/product card/product-card.component";
import { CategoriesContext } from "../../context/categories-context";
import { useContext } from "react";
const Hats = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <h1>Hats</h1>
      {categoriesMap["hats"].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
export default Hats;
