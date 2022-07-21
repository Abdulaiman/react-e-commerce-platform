// import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { DropDownContext } from "../../context/dropdown-context";
import { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIconStyles,
  ItemCount,
} from "./cart-icon.styles.jsx";
const CartIcon = () => {
  const { cartCount } = useContext(DropDownContext);

  return (
    <CartIconContainer>
      <ShoppingIconStyles as={ShoppingIcon} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
