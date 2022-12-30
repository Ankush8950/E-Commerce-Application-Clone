import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import ShopingCart from "./Shopingcart/ShopingCart";
import { Link } from "react-router-dom";

const Navbar = ({ product }) => {
  const [cart, setCart] = useState(false);
  const [count, setcount] = useState([]);

  const countproduct = () => {
    const pro = product.length;
    setcount(pro);
  };

  useEffect(() => {
    countproduct();
  });
  return (
    <>
      <div className="flex h-20 w-full items-center justify-between pl-20 pr-20 bg-[#1f242c] text-white fixed top-0 left-0 z-10">
        <div>
          <Link
            className="cursor-pointer font-medium text-lg hover:text-xl"
            to="/"
          >
            Home
          </Link>
        </div>
        <div
          className="flex items-center justify-center cursor-pointer relative"
          onClick={() => setCart(true)}
        >
          <h1 className="font-normal text-lg capitalize">cart</h1>
          <FaCartArrowDown className="ml-3 text-xl" />
          <h1 className="absolute right-[-10px] bottom-[10px]">{count}</h1>
        </div>
      </div>

      {cart ? <ShopingCart setacart={setCart} products={product} /> : ""}
    </>
  );
};

export default Navbar;
