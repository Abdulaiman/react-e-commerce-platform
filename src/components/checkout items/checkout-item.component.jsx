import "./checkout-item.styles.scss";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropdown-context";
const CheckoutItem = ({ item }) => {
  const { id, name, quantity, imageUrl, price } = item;

  const { addItemToCart, removeItemFromCart, decreaseItemQuantity } =
    useContext(DropDownContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div onClick={() => decreaseItemQuantity(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItemToCart(item)} className="arrow">
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
