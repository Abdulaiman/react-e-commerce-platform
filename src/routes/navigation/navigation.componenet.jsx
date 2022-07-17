import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart Icon/cart-icon.component";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { DropDownContext } from "../../context/dropdown-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { state, setState } = DropDownContext;
  console.log(state);
  const dropDownHandler = () => {};
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          <Link className="nav-link" to="/auth">
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                sign out
              </span>
            ) : (
              <span className="nav-link">sign in</span>
            )}
          </Link>
          <button onClick={dropDownHandler}>
            <CartIcon />
          </button>
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
