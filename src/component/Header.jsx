
import {  NavLink } from "react-router-dom";
import Crown from "../assets/Crown";

import CartItem from "./CartItem";
import "./header.scss";
 
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <Crown />
        </div>
        <div className="options">
          <NavLink style={{ textDecoration: "none" }} to={"/"}><div className="option">Home</div></NavLink>
          <NavLink style={{ textDecoration: "none" }}  to={"/Shops"}><div className="option">Shop</div></NavLink>
          <div className="option">Contact</div>
          <div className="option">Sign in</div>
          <div className="option">Sign up</div>
          
          <CartItem />
        </div>
      </div>
    </div>
  );
};
 
export default Header;