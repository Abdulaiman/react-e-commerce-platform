import { useContext } from "react";
import { DropDownContext } from "../../context/dropdown-context";
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
const CheckoutItem = ({ item }) => {
  const { id, name, quantity, imageUrl, price } = item;

  const { addItemToCart, removeItemFromCart, decreaseItemQuantity } =
    useContext(DropDownContext);
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={() => decreaseItemQuantity(item)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemToCart(item)}>&#10095;</Arrow>
      </Quantity>

      <Price>{price}</Price>
      <RemoveButton onClick={() => removeItemFromCart(item)}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};
export default CheckoutItem;
