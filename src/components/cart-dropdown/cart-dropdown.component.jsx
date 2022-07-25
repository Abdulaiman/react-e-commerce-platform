import Button from "../button/button.component";
import CartItem from "../../components/cart item/cart-iitem.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import {
  setCartItemsSelector,
  setStateSelector,
} from "../../store/cart.selector";
import { useDispatch } from "react-redux";
import { setState } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const cartItem = useSelector(setCartItemsSelector);
  const state = useSelector(setStateSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useNavigateHandler = () => {
    navigate("/checkout");
    dispatch(setState(state ? false : true));
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItem.length ? (
          cartItem.map((Item) => {
            return <CartItem key={Item.id} cartItem={Item} />;
          })
        ) : (
          <EmptyMessage>your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={useNavigateHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
