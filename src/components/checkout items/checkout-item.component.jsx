import {
  CheckOutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import {
  addItemToCart,
  decreaseItemQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { setCartItemsSelector } from "../../store/cart.selector";
import { useDispatch } from "react-redux";
import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPE from "../../store/cart/cart.type";
const CheckoutItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  const cartItem = useSelector(setCartItemsSelector);
  const dispatch = useDispatch();
  const addItem = () => {
    const newCartItem = addItemToCart(cartItem, item);
    dispatch(createAction(CART_ACTION_TYPE.setCartItem, newCartItem));
  };
  const decreaseItem = () => {
    const newCartItem = decreaseItemQuantity(cartItem, item);
    dispatch(createAction(CART_ACTION_TYPE.setCartItem, newCartItem));
  };
  const removeItem = () => {
    const newCartItem = removeItemFromCart(cartItem, item);
    dispatch(createAction(CART_ACTION_TYPE.setCartItem, newCartItem));
  };
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={decreaseItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>

      <Price>{price}</Price>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};
export default CheckoutItem;
