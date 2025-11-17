import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  return (
    <div className="flex justify-between items-center bg-blue-950 text-white py-[15px] px-10">
      <div className="text-[24px] font-bold">MyShop</div>
      <ul className="flex gap-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
      <div className="relative text-[20px] cursor-pointer">
        <Link to={"/cart"}>
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png"
            className="w-6 h-6 align-middle"
            alt="Cart"
          />
          <span className="absolute -top-2 -right-2.5 bg-[#e63946] text-white text-[12px] font-bold rounded-full px-[7px] py-[3px]">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
