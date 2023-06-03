import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {   // why is button tag is used here and ya reload nhi ho rha hai
  return (
    <button className = {classes.button}>
      <span className = {classes.icon}>
        <CartIcon />
      </span>
      <span >Your Cart </span>
      <span className = {classes.badge}> 3 </span>
    </button>
  ); 
};

export default HeaderCartButton;
