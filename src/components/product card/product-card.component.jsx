import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
  Image,
  MyButton,
} from "./product-card.styles";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import CART_ACTION_TYPE from "../../store/cart/cart.type";
import { useSelector } from "react-redux";
import { setCartItemsSelector } from "../../store/cart.selector";
import { createAction } from "../../utils/reducer/reducer.utils";

const ProductCard = ({ product }) => {
  const cartItem = useSelector(setCartItemsSelector);
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const addToCartHandler = () => {
    const payload = addItemToCart(cartItem, product);
    dispatch(createAction(CART_ACTION_TYPE.setCartItem, payload));
  };
  // dispatch(setCartCount(cartItem));
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
