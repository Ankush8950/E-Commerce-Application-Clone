import React from "react";

const Cart = ({ item, handleProduct }) => {
  // destructuring all cart item in a varible
  const { price, title, category, images, description } = item;

  return (
    <>
      <div className="w-[220px] sm:w-[280px] md:w-[320px] sm-1 sm:m-3 p-2 sm:p-5 items-center justify-center  hover:shadow-2xl rounded-lg cursor-pointer relative group">
        <img className="rounded-lg" src={images} alt="" />
        <h1 className="font-semibold text-sm sm:text-lg mt-3">
          {category.name}
        </h1>
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-medium text-xs sm:text-sm">{title}</h1>
          <h2 className="text-[#00D84A] text-xs sm:text-sm w-10">₹ {price}</h2>
        </div>
        <p className="font-normal  text-xs sm:text-sm mt-3 ">{description}</p>

        <div className="h-full opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0  flex flex-col justify-between p-2 items-center text-xl bg-[#D3D5D7] text-black font-semibold rounded-lg">
          <img className="rounded-lg" src={images} alt="" />
          <h1 className="font-medium text-sm sm:text-base">{title}</h1>
          <button
            className="bg-[#1f242c] w-[8rem] sm:w-[12rem] ease-in-out duration-300 text-sm sm:text-lg hover:bg-white hover:text-black text-white pl-3 pr-3 pt-2 pb-2 mb-5 rounded"
            onClick={() => handleProduct(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
