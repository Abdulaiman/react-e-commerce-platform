import "./checkout.styles.scss";
import { DropDownContext } from "../../context/dropdown-context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout items/checkout-item.component";
const CheckOut = () => {
  const { cartItem, totalAmount } = useContext(DropDownContext);
  console.log(totalAmount);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">TOTAL:${totalAmount}</span>
    </div>
  );
};
export default CheckOut;
