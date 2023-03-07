import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../HeroIcons";
import { PlusIcon } from "../HeroIcons";
import { MinusIcon } from "../HeroIcons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
        </div>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
