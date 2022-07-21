import {
  CartItemContainer,
  ItemDetails,
  name,
  Img,
  Name,
} from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <br />
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
