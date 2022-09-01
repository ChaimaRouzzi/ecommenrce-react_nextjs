import React from "react";
import Link from "next/link";
import { Cart } from "./";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { setShowCart, totalQuantities, showCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">CHM Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
