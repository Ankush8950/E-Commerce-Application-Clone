import React from "react";

const Cart = ({ item, handleProduct }) => {
  const { price, title, category, images, description } = item;

  return (
    <>
      <div className="w-[320px] m-3 p-5 items-center justify-center  hover:shadow-2xl rounded-lg cursor-pointer relative group ">
        <img className="rounded-lg" src={images} alt="" />
        <h1 className="font-semibold text-lg mt-3">{category.name}</h1>
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-medium text-sm">{title}</h1>
          <h2 className="text-[#00D84A] w-10">₹ {price}</h2>
        </div>
        <p className="font-normal text-sm mt-3">{description}</p>

        <div className="h-full opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-0 right-0  flex flex-col justify-between p-2 items-center text-xl bg-[#D3D5D7] text-black font-semibold rounded-lg">
          <img className="rounded-lg" src={images} alt="" />
          <button
            className="bg-[#1f242c] ease-in-out duration-300 hover:bg-white hover:text-black text-white border-2 pl-3 pr-3 pt-2 pb-2 mb-5 rounded"
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
