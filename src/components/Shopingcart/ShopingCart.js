import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ShopingCart = ({setacart}) => {
  return (
    <>
      <div class=" h-3/4 w-2/3  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 absolute top-20  z-10 ">
        <div className="flex items-center justify-between ">
          <div className="p-5">Name</div>
          <div className="w-10 h-10 mr-10  rounded-full hover:bg-black text-black hover:text-white  flex items-center justify-center cursor-pointer " onClick={()=>setacart(false)}>
            <AiOutlineClose className=" text-center font-semibold text-2xl "  />
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#1f242c]"></div>
        <div className="flex itmes-center justify-between">
        <div>
            <img
              class="rounded w-[25rem] h-3/2 mt-10 ml-5"
              src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            </div>
          <div class="w-[20rem] mt-10">
          <h1 className="">Current price: 500</h1>
              <h5 class="mt-10 mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white capitalize">
                total price : 5000
              </h5>
            <button className="bg-black text-white pl-3 pr-3 pt-2 pb-2 hover:border-2 hover:bg-white hover:text-black uppercase rounded-lg">palce order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopingCart;
