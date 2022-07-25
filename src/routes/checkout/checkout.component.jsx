import "./checkout.styles.jsx";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Span,
  Total,
} from "./checkout.styles.jsx";
import CheckoutItem from "../../components/checkout items/checkout-item.component";
import { setCartItemsSelector } from "../../store/cart.selector.js";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../store/cart.selector.js";
const CheckOut = () => {
  // const { cartItem, totalAmount } = useContext(DropDownContext);
  const totalAmount = useSelector(cartTotalSelector);
  const cartItem = useSelector(setCartItemsSelector);
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
