import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
  CartIconContainer,
  ShoppingIconStyles,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { useSelector } from "react-redux";
import { cartCountSelector } from "../../store/cart.selector";
const CartIcon = () => {
  // const { cartCount } = useContext(DropDownContext);
  // const cartItem = useSelector(cartItem);
  // const dispatch = useDispatch();
  // dispatch(setCartCount(cartItem));
  const cartCount = useSelector(cartCountSelector);

  return (
    <CartIconContainer>
      <ShoppingIconStyles as={ShoppingIcon} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
