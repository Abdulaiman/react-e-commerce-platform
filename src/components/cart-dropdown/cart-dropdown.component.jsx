// import "./cart-dropdown.styles.jsx";
import { useContext } from "react";
import Button from "../button/button.component";
import { DropDownContext } from "../../context/dropdown-context";
import { Link } from "react-router-dom";
import CartItem from "../../components/cart item/cart-iitem.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  const { cartItem, setState, state } = useContext(DropDownContext);
  const navigate = useNavigate();
  const useNavigateHandler = () => {
    navigate("/checkout");
    setState(state ? null : true);
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
