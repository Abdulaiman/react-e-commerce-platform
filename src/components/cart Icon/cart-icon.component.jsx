import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { DropDownContext } from "../../context/dropdown-context";
import { useContext } from "react";
const CartIcon = () => {
  const { cartCount } = useContext(DropDownContext);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shoppingIcon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
