import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart Icon/cart-icon.component";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { DropDownContext } from "../../context/dropdown-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { state, setState } = useContext(DropDownContext);
  const dropDownHandler = () => {
    setState(state ? null : true);
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">shop</NavLink>
          <NavLink to="/auth">
            {currentUser ? (
              <NavLink as={"span"} onClick={signOutUser}>
                sign out
              </NavLink>
            ) : (
              <span className="nav-link">sign in</span>
            )}
          </NavLink>
          <button onClick={dropDownHandler}>
            <CartIcon />
          </button>
        </NavLinks>
        {state ? <CartDropdown /> : ""}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
