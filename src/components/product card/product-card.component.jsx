import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropdown-context";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(DropDownContext);
  const { name, imageUrl, price } = product;
  const addToCartHandler = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={addToCartHandler}>
        add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
