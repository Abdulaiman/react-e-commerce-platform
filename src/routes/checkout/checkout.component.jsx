import "./checkout.styles.jsx";
import { DropDownContext } from "../../context/dropdown-context";
import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Span,
  Total,
} from "./checkout.styles.jsx";
import CheckoutItem from "../../components/checkout items/checkout-item.component";
const CheckOut = () => {
  const { cartItem, totalAmount } = useContext(DropDownContext);
  console.log(totalAmount);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <Span>Products</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Description</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Quantity</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Price</Span>
        </HeaderBlock>
        <HeaderBlock>
          <Span>Remove</Span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItem.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>TOTAL:${totalAmount}</Total>
    </CheckoutContainer>
  );
};
export default CheckOut;
