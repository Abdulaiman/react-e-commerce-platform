import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
  Image,
  MyButton,
} from "./product-card.styles";
import Button from "../button/button.component";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropdown-context";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(DropDownContext);
  const { name, imageUrl, price } = product;
  const addToCartHandler = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <MyButton
        as={Button}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartHandler}
      >
        add to cart
      </MyButton>
    </ProductCardContainer>
  );
};
export default ProductCard;
