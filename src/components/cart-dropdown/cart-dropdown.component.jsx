import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import Button from "../button/button.component";
import { DropDownContext } from "../../context/dropdown-context";
import { Link } from "react-router-dom";
import CartItem from "../../components/cart item/cart-iitem.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItem, setState, state } = useContext(DropDownContext);
  const navigate = useNavigate();
  const useNavigateHandler = () => {
    navigate("/checkout");
    setState(state ? null : true);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((Item) => {
          return <CartItem key={Item.id} cartItem={Item} />;
        })}
      </div>
      <Button onClick={useNavigateHandler}>CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
